//import { prisma } from "../prisma/lib/prisma"
const { prisma } = require("../../prisma/lib/prisma");
const updatePOST = async (req, res) => {
    try {
        const id=req.user.id;
        if(!id){
            return res.status(401).json({
                success:false,
                message:"Unauthorized User"
            });
        }
        
        const { title, message } = req.body;
        

        if (!title ) {
            return res.status(400).json({
                success: false,
                message: 'Title  is required'
            });
        }
        const data = await prisma.post.update({
            where: {
                authorId: id
            },
            data: {
                title: title,
                message: message || null,

            }
        });

        res.status(200).json({
            title: data.title,
            message: data.message,
            authorId: data.authorId,
            id: data.id
        });
    } catch (e) {
        console.error("update url error :", e);
        res.status(500).json({ success: false, message: 'Internal Server error' });
    }
}
module.exports = updatePOST;