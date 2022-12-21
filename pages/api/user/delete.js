import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();

export default async function handler(req, res) {
    try {
        const user = await prisma.users.findUnique({
          where: { id: Number(req.query.id) },
        });
        // Check if the user have an avatar, if yes, delete it from the server
        if (user.avatarUrl !== null) {
          const filename = user.avatarUrl.split("/images/")[1];
          fs.unlinkSync(`images/${filename}`);
        }
        // Delete the user
        await prisma.users.delete({
          where: { id: user.id },
        });
        res.clearCookie("Token");
        res.status(200).json({ user, message: "L'utilisateur a été surprimé !" });
      } catch (error) {
        res.status(500).json({ error });
      }
}