import 'dotenv/config';
import readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
import bcrypt from 'bcryptjs';
import { prisma } from '../src/config/prisma.js';

const rl = readline.createInterface({ input, output });
try {
  const email = (process.argv[2] || await rl.question('Admin email: ')).trim().toLowerCase();
  const name = (process.argv[3] || await rl.question('Admin name: ')).trim();
  const password = await rl.question('Admin password (min 12 characters): ');
  const allowed = new Set((process.env.ADMIN_EMAILS || '').split(',').map(v => v.trim().toLowerCase()).filter(Boolean));
  if (!allowed.has(email)) throw new Error('Email must first be included in the backend ADMIN_EMAILS allowlist.');
  if (!name || password.length < 12) throw new Error('A name and password of at least 12 characters are required.');
  const password_hash = await bcrypt.hash(password, 12);
  const existing = await prisma.user.findUnique({ where: { email } });
  if (existing) {
    await prisma.user.update({ where: { email }, data: { name, password_hash, deleted_at: null } });
    console.log(`Platform admin credentials updated for ${email}.`);
  } else {
    await prisma.user.create({ data: { email, name, password_hash } });
    console.log(`Platform admin account created for ${email}.`);
  }
} catch (error) {
  console.error(error.message);
  process.exitCode = 1;
} finally {
  rl.close();
  await prisma.$disconnect();
}
