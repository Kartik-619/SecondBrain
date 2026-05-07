const { prisma } = require("../../prisma/lib/prisma");

const deletePost=async(req,res)=>{
    try{
        const authorId=req.user.id;
        const postId=Number(req.user.params);
        if(!authorId){
            return res.status(401).success({
                success:false,
                message:'Unauthorized Access'
            });
        }

        if(!postId){
            return res.status(400).json({
                success:false,
                message:"Action on this post is unauthorized"
            });
        }

        const deletePost=await prisma.post.delete({
            where:{
                id:postId
             
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