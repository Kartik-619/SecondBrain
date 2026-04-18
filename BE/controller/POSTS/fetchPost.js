//import { prisma } from "../prisma/lib/prisma"
const { prisma } = require("../../prisma/lib/prisma");
const fetchPOST=async(req,res)=>{
    try{
        const {title,authorId,message}=req.query;
        res.status(200).json({
            authorId,
            title:title,
            message:message
        });
    }catch(e){
        console.error("get url error :",e);
        res.status(500).json({success:false,message:'Internal Server error'});
    }
}
module.exports=fetchPOST;