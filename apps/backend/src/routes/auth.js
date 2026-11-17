import bcrypt from 'bcryptjs';
import {z} from 'zod';
import {prisma} from '../config/prisma.js';
const credentials=z.object({email:z.string().trim().email().max(254),password:z.string().min(8).max(128)});
export default async function authRoutes(app){
 app.post('/register',async(req,reply)=>{
  const parsed=credentials.extend({name:z.string().trim().min(1).max(120)}).safeParse(req.body||{});
  if(!parsed.success)return reply.code(400).send({error:'Enter your name, a valid email and a password of at least 8 characters.'});
  const {email,password,name}=parsed.data;const normalized=email.toLowerCase();
  if(await prisma.user.findUnique({where:{email:normalized}}))return reply.code(409).send({error:'An account with this email already exists.'});
  const password_hash=await bcrypt.hash(password,12);
  const user=await prisma.user.create({data:{email:normalized,password_hash,name}});
  const token=app.jwt.sign({id:user.id,org_id:user.org_id,email:user.email},{sub:user.id,expiresIn:process.env.JWT_EXPIRES_IN||'7d'});
  return reply.code(201).send({success:true,token,user:{id:user.id,name:user.name,email:user.email}});
 });
 app.post('/login',async(req,reply)=>{
  const parsed=credentials.safeParse(req.body||{});if(!parsed.success)return reply.code(400).send({error:'Enter a valid email and password.'});
  const user=await prisma.user.findUnique({where:{email:parsed.data.email.toLowerCase()}});
  if(!user||user.deleted_at||!(await bcrypt.compare(parsed.data.password,user.password_hash)))return reply.code(401).send({error:'Email or password is incorrect.'});
  const token=app.jwt.sign({id:user.id,org_id:user.org_id,email:user.email},{sub:user.id,expiresIn:process.env.JWT_EXPIRES_IN||'7d'});
  return {success:true,token,user:{id:user.id,name:user.name,email:user.email}};
 });
 app.get('/me',{preHandler:async(req,reply)=>{try{await req.jwtVerify()}catch{return reply.code(401).send({error:'Please sign in.'})}}},async req=>({user:{id:req.user.id,email:req.user.email}}));
}
