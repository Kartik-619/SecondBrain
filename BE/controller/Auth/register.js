const { prisma } = require("../../prisma/lib/prisma");

const registerController=async (req,res)=>{
    try{
        const {username,email,password}=req.body;
        if(!username || !email || !password){
            return res.status(400).json({success:false,message:'Incomplete field'});
        }
        const existingUser=await prisma.user.findUnique({
            where:{
                email
            }
        });

        if(existingUser){
            return res.status(401).json({
                success:false,
                message:"The user already exists"});
        }

        const user= await prisma.user.create({
          data:{  username:username,
            email:email,
            password:password}
        });

        res.json({
            user: {
                id: user.id,
                username: user.username,
                email: user.email
            },
            success:true
        })

    }catch(e){
        console.error('Register Error',e);
        return res.json({success:false,message:'Internal Server Error'});
    }
}
module.exports=registerController;