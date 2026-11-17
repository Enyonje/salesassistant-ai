export async function requireAuth(request,reply){
 try{await request.jwtVerify();if(!request.user?.id)throw new Error('Invalid session');}
 catch{return reply.code(401).send({success:false,error:'Your session is invalid or has expired. Please sign in again.'});}
}
