import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();

export default async function handler(req, res) {
  try {
    // Check if the request have an image, if yes
    if (req.file !== undefined) {
      const user = await prisma.users.findUnique({
        where: { id: Number(req.body.id) },
      });
      // Check if the user already have an avatar, if yes, delete it from the server
      if (user.avatarUrl !== null) {
        const filename = user.avatarUrl.split("/images/")[1];
        fs.unlinkSync(`images/${filename}`);
      }
      // Update the user's avatar with the new one
      await prisma.users.update({
        where: { id: user.id },
        data: { avatarUrl: `/images/avatars/${req.file.filename}` },
      });
    }
    // Update the user fisrtname and lastname
    const user = await prisma.users.update({
      where: { id: Number(req.body.id) },
      data: {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
      },
    });
    res.status(200).json({ user, message: "L'utilisateur a été modifié !" });
  } catch (error) {
    res.status(500).json({ error });
  }
}