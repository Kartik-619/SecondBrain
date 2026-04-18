const { prisma } = require("../../prisma/lib/prisma");
const savePost=async( req,res)=>{
   
    if(!authorId){
        return res.status(400).json({
            success:false,
            message:"The Id is required"
        });       
    }
    try{
        const {authorId,message,title}=req.body;
        
        const data=await prisma.post.create({
         
            data:{
                title:title,
                message:message||null,
                author: {                    // Use the 'author' relation, not 'authorId'
                    connect: { id: authorId }  // Connect to existing author by id
                }

        }});

        res.status(200).json({
            data
        });
    }catch(e){

        return res.status(500).json({
            success:false,
            message:"Internal Server Error"
        });
    }
}

module.exports=savePost;