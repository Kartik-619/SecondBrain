//import { prisma } from "../prisma/lib/prisma"
const { prisma } = require("../../prisma/lib/prisma");
const updatePOST = async (req, res) => {
    try {
        const UserId=req.user.id;
        const postId=Number(req.params.id);
        if(!UserId){
            return res.status(401).json({
                success:false,
                message:"Unauthorized User"
            });
        }

        if(!postId){
            return res.status(401).json({
                success:false,
                message:"Post id is Invalid"
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
                id:postId
            },
            data: {
                title: title,
                message: message || null,

            }
        });

        res.status(200).json({
           success:true,
           data
        });
    } catch (e) {
        console.error("update url error :", e);
        res.status(500).json({ success: false, message: 'Internal Server error' });
    }
}
module.exports = updatePOST;