const { prisma } = require("../../prisma/lib/prisma");

const registerController=async (req,res)=>{
    try{
        const {username,email,password}=req.body;
        if(!username || !email || !password){
            return res.status(400).json({success:false,message:'Incomplete field'});
        }

        const register= await prisma.user.create({
            username:username,
            email:email,
            password:password
        });

        res.json({
            register,
            success:true
        })

    }catch(e){
        console.error('Register Error',e);
        return res.json({success:false,message:'Internal Server Error'});
    }
}
module.exports=registerController;