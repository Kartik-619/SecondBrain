//import { prisma } from "../prisma/lib/prisma"
const { prisma } = require("../../prisma/lib/prisma");
const fetchURL=async(req,res)=>{
    try{
        const {title,authorId,url}=req.query;
        res.status(200).json({
            authorId,
            title:title,
            url:url
        });
    }catch(e){
        console.error("get url error :",e);
        res.status(500).json({success:false,message:'Internal Server error'});
    }
}
module.exports=fetchURL;