const { prisma } = require("../../prisma/lib/prisma");

const LoginController=async (req,res)=>{
    try{
        const {email,password}=req.body;
        if(!email || !password){
            return res.status(400).json({success:false,message:'Fields are incomplete'});
        }

        const user=await prisma.user.findUnique({
          where:{
            email
          }
        });

        if(!user){
            return res.status(400).json({
                success:false,
                message:'The user does not exist'
            });
        }

        if(password!==user.password){
            return res.status(401).json({
                success:false,
                message:'Password does not match'
            });
        }

        return res.status(200).json({
            success:true,
            message:'Login successful',
            username:user.username,
            id:user.id,
            email:user.email
        });

    }catch(e){
        console.error(e);
        return res.status(500).json({
            success:false,
            message:'Internal Server Error'});
    }
}

module.exports=LoginController