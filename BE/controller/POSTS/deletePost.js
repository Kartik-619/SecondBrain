const { prisma } = require("../../prisma/lib/prisma");

const deletePost=async(req,res)=>{
    try{
        const authorId=req.user.id;
        if(!authorId){
            return res.status(401).success({
                success:false,
                message:'Unauthorized Access'
            });
        }
        const {title}=req.query;
        const deletePost=await prisma.post.delete({
            where:{
                title:title,
                authorId:authorId
            }
        });
        res.status(200).json({
            success:true,
            message:'Post deleted successfully',
            data:deletePost
        });
    }catch(e){
        console.error("get message error :",e);
        res.status(500).json({success:false,message:'Internal Server error'});
    }
}
module.exports=deletePost;