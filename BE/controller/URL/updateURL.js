//import { prisma } from "../prisma/lib/prisma"
const { prisma } = require("../../prisma/lib/prisma");
const updateURL = async (req, res) => {
    try {
        const { title, url, id } = req.body;
        if (!title || !id) {
            return res.status(400).json({
                success: false,
                message: 'Title and AuthorID is required'
            })
        }
        const authorId = parseInt(id);
        const data = await prisma.post.update({
            where: {
                authorId: authorId
            },
            data: {
                title: title,
                url: url || null,

            }
        });

        res.status(200).json({
            title: data.title,
            url: data.url,
            authorId: data.authorId,
            id: data.id
        })
    } catch (e) {
        console.error("update url error :", e);
        res.status(500).json({ success: false, message: 'Internal Server error' });
    }
}
module.exports = updateURL;