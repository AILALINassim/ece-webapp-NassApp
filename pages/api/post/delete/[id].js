import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();

export default async function handler(req, res) {
  try {
    const post = await prisma.posts.findUnique({
      where: { id: Number(req.query.id) },
    });
    // Check if the post have an image, if yes, delete it from the server
    if (post.imageUrl !== null) {
      const filename = post.imageUrl.split("/images/")[1];
      fs.unlinkSync(`images/${filename}`);
    }
    // Delete the post
    await prisma.posts.delete({
      where: { id: post.id },
    });
    res.status(200).json({ post, message: "Le post a été surprimé !" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error });
  }
}