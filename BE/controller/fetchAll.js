const { prisma } = require("./../prisma/lib/prisma");

const FetchAllPost=async(req,res)=>{
    try{
        const id=req.user.id;
        if(!id){
            return res.status(401).json({
                success:false,
                message:"User not recognized"
            });
        }
        const result=await prisma.post.findMany({
            where:{
                authorId:id
            }
           
        });

        return res.status(200).json({
            success:true,
            message:"Posts retreived successfully",
            data:result
        })
    }catch(e){
        console.error(e);
        return res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
    }
}
module.exports=FetchAllPost;