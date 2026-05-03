//import { prisma } from "../prisma/lib/prisma"
const { prisma } = require("../../prisma/lib/prisma");
const fetchPOST=async(req,res)=>{
    try{
        const {id}=req.query;
        if( !id){
            return res.status(400).json({
                success:false,
                message:"Enter the title correctly or login again"
            })
        }
        const data=await prisma.post.findFirst({
            where:{
                authorId:id,
            }
        });
        res.status(200).json({
           success:true,
           data:{
            id:data.id,
            title:data.title,
            message:data.message,
            url:data.url 

           }
        });
    }catch(e){
        console.error("get url error :",e);
        res.status(500).json({success:false,message:'Internal Server error'});
    }
}
module.exports=fetchPOST;