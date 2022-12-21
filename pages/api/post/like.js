import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();

export default async function handler(req, res) {
try {
    const like = await prisma.likes.findFirst({
      where: {
        user_id: req.body.user_id,
        post_id: req.body.post_id,
      },
    });
    // Check if the user already liked the post, if yes, delete the like
    if (like !== null) {
      await prisma.likes.deleteMany({
        where: {
          user_id: req.body.user_id,
          post_id: req.body.post_id,
        },
      });
      res.status(200).json({ like, message: "Le like a été supprimé !" });
    } else {
      // Create the like
      await prisma.likes.create({
        data: {
          user_id: req.body.user_id,
          post_id: req.body.post_id,
        },
      });
      res.status(200).json({ like, message: "Le post a été liké !" });
    }
  } catch (error) {
    res.status(500).json({ error });
  }

}