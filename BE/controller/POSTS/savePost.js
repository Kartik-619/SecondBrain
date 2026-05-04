const { prisma } = require("../../prisma/lib/prisma");
const savePost=async( req,res)=>{
   
 
    try{
        const authorId=req.user.id;
        const {message,title}=req.body;
        if(!authorId){
            return res.status(400).json({
                success:false,
                message:"The Id is required"
            });       
        }
        const data=await prisma.post.create({
         
            data:{
                title:title,
                message:message||null,
                author: {                    // Use the 'author' relation, not 'authorId'
                    connect: { id: authorId }  // Connect to existing author by id
                }

        }});

        res.status(200).json({
            success:true,
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