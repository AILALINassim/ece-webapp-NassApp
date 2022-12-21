import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();

export default async function handler(req, res) {
  try {
    // Check if the request have an image, if yes
    if (req.file !== undefined) {
      const post = await prisma.posts.findUnique({
        where: { id: Number(req.body.id) },
      });
      // Check if the post to update already have an image, if yes, delete it from the server

      if (post.imageUrl !== null) {
        const filename = post.imageUrl.split("/images/")[1];
        fs.unlinkSync(`images/${filename}`);
      }
      // Update the post with the new image
      await prisma.posts.update({
        where: { id: post.id },
        data: { imageUrl: `/images/posts/${req.file.filename}` },
      });
    }
    console.log(req.body.id);
    // Update the post message
    const post = await prisma.posts.update({
      where: { id: req.body.id },
      data: { message: req.body.message },
    });
    res.status(200).json({ post, message: "Le post a été modifié !" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error });
  }
}