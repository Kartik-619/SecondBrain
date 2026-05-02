const { prisma } = require("../../prisma/lib/prisma");
const { post } = require("../routes/POST");

const FetchAllPost=async(req,res)=>{
    try{
        const {id}=req.body;
        if(!id){
            return res.status(402).json({
                success:false,
                message:"User not recognized"
            });
        }
        const result=await prisma.post.findMany({
            where:{
                AuthorId:id
            },
            include:{
                posts:true
            }
        });

        return res.status(200).json({
            success:true,
            message:"Posts retreived successfully",
            data:{
                id:result.AuthorId,
                post:result.post,
                title:result.post.title,
                message:result.post.message,
                url:result.post.url
            }
        })
    }catch(e){
        console.error(e);
    }
}
module.exports=FetchAllPost;