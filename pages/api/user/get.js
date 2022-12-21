import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();

export default async function handler(req, res) {
    try {
        const user = await prisma.users.findUnique({
          where: { id: Number(req.query.id) },
        });
        res.status(200).json({ user, message: "L'utilisateur a été récupéré !" });
      } catch (error) {
        res.status(500).json({ error });
      }
}