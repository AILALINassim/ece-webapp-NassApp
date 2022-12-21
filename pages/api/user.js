import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();

//const prisma = new PrismaClient({ datasources: {  db: { url: "postgres://postgres:esYRzLDOsmmScKsu@db.wfqyvuitoqiyzupcwfmg.supabase.co:6543/postgres?pgbouncer=true" } } });

export default async function handler(req, res) {
    try {
        const t = await prisma.users.findUnique({
          where: { email : "test1@gmail.com" },
        });
        res.status(200).json({ t, message: "L'utilisateur a été récupéré !" });
      } catch (error) {
        console.log(error);
        res.status(500).json({ error });
      }
}