//import { prisma } from "../prisma/lib/prisma"
const { prisma } = require("../../prisma/lib/prisma");
const saveURL=async(req,res)=>{
    try{
        const {title,url,id}=req.body;
        if(!title ||!id){
            return res.status(400).json({
                success:false,
                message:'Title and AuthorID is required'
            })
        }
        const authorId = parseInt(id);
        const data=await prisma.post.create({
           
            data:{
                title:title,
                url:url||null,
                author: {                    // Use the 'author' relation, not 'authorId'
                    connect: { id: authorId }  // Connect to existing author by id
                }
             
            }
        });

        res.status(200).json({
            title:data.title,
            url:data.url,
            authorId:data.authorId,
            id:data.id
        })
    }catch(e){
        console.error("save url error :",e);
        res.status(500).json({success:false,message:'Internal Server error'});
    }
}
module.exports=saveURL;