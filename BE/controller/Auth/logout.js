const Logout=async(req,res)=>{
    try{
        const id=req.user.id;
        if(!id){
            return res.status(401).json({
                success:false,
                message:'Unauthorized Acess'
            });
        }
        res.clearCookie("token", {
            httpOnly: true,
            secure: false,      // true in production (HTTPS)
            sameSite: "lax"
        });
        return res.status(200).json({
            success: true,
            message: "Logged out successfully"
        });

    }catch(e){
        return res.status(500).json({
            success:false,
            message:'Internal Server Error'
        });
    }
}
module.exports=Logout;