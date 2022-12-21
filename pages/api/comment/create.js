import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();

export default async function handler(req, res) {
    try {
        const comment = await prisma.comments.create({
            data: {
                message: req.body.message,
                user_id: Number(req.body.user_id),
                post_id: Number(req.body.post_id),
            },
            include: { users: true },
        });
        res.status(200).json({ comment, message: "Le commentaire a été créé !" });
    } catch (error) {
        res.status(500).json({ error });
    }
}