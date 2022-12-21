import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();

export default async function handler(req, res) {
  try {
    // Check if the request have an image, if yes, create the post with the image
    if (req.file !== undefined) {
      const post = await prisma.posts.create({
        data: {
          message: req.body.message,
          imageUrl: `/images/posts/${req.file.filename}`,
          user_id: Number(req.body.user_id),
        },
      });
      res.status(200).json({ post, message: "Le post a été créé !" });
    } else {
      // Create the post without image
      const post = await prisma.posts.create({
        data: {
          message: req.body.message,
          user_id: Number(req.body.user_id),
        },
      });
      res.status(200).json({ post, message: "Le post a été créé !" });
    }
  } catch (error) {
    console.log(error);

    res.status(500).json({ error });
  }
}