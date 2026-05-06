//import { prisma } from "../prisma/lib/prisma"
const { prisma } = require("../../prisma/lib/prisma");
const fetchPOST=async(req,res)=>{
    try{
        const id=req.user.id;
        const postId=Number(req.params.id);
        if( !id){
            return res.status(400).json({
                success:false,
                message:"Enter the title correctly or login again"
            })
        }
        if(!postId){
            return res.status(400).json({
                success:false,
                message:"The postID is unavailable"
            });
        }

        const data=await prisma.post.findFirst({
            where:{
                id:postId,
            }
        });

        if(!data){
            return res.status(402).json({
                success:false,
                message:"The user cannot fetch the post"
            });
        }
        res.status(200).json({
           success:true,
           data
        });
    }catch(e){
        console.error("get url error :",e);
        res.status(500).json({success:false,message:'Internal Server error'});
    }
}
module.exports=fetchPOST;