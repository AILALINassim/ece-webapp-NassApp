import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();

export default async function handler(req, res) {
    try {
        const comment = await prisma.comments.delete({
          where: { id: Number(req.query.id) },
        });
        res
          .status(200)
          .json({ comment, message: "Le commentaire a été surprimé !" });
      } catch (error) {
        res.status(500).json({ error });
      }
}