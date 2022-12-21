import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();

export default async function handler(req, res) {
    try {
        const comment = await prisma.comments.update({
          where: { id: Number(req.body.id) },
          data: { message: req.body.message },
          include: { users: true },
        });
        res
          .status(200)
          .json({ comment, message: "Le commentaire a été modifié !" });
      } catch (error) {
        res.status(500).json({ error });
      }
}