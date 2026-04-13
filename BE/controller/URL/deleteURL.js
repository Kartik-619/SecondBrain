const { prisma } = require("../../prisma/lib/prisma");

const deleteURL=async(req,res)=>{
    try{
        const {title}=req.query;
        const deletePost=await prisma.post.delete({
            where:{
                title:title
            }
        });
        res.status(200).json({
            success:true,
            message:'Post deleted successfully',
            data:deletePost
        });
    }catch(e){
        console.error("get url error :",e);
        res.status(500).json({success:false,message:'Internal Server error'});
    }
}
module.exports=deleteURL;