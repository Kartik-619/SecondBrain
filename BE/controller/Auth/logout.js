const Logout=async(req,res)=>{
    try{
       
        res.clearCookie("token", {
            httpOnly: true,
            secure: true,      // true in production (HTTPS)
            sameSite: "none"
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