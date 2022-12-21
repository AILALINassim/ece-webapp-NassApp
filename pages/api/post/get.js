import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();

export default async function handler(req, res) {
    try {
        const posts = await prisma.posts.findMany({
          include: {
            users: true,
            comments: { include: { users: true } },
            likes: { include: { users: true } },
          },
          orderBy: { createdAt: "desc" },
        });
        res
          .status(200)
          .json({ posts, message: "Tous les posts ont été récupérés !" });
      } catch (error) {
        console.log(error);
        res.status(500).json({ error });
      }
}