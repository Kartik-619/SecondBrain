//import { prisma } from "../prisma/lib/prisma"

const saveURL=async(req,res)=>{
    try{
        const {title,url,id}=req.body;
        res.status(200).json({
            title:title,
            url:url,
            authorId:id
        })
    }catch(e){
        console.error("save url error :",e);
        res.status(500).json({success:false,message:'Internal Server error'});
    }
}
module.exports=saveURL;