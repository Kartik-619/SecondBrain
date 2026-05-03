const { prisma } = require("../../prisma/lib/prisma");
const { post } = require("../routes/POST");

const FetchAllPost=async(req,res)=>{
    try{
        const {id}=req.params;
        if(!id){
            return res.status(402).json({
                success:false,
                message:"User not recognized"
            });
        }
        const result=await prisma.post.findMany({
            where:{
                AuthorId:id
            }
           
        });

        return res.status(200).json({
            success:true,
            message:"Posts retreived successfully",
            data:result
        })
    }catch(e){
        console.error(e);
    }
}
module.exports=FetchAllPost;