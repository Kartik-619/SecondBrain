const jwt=require('jsonwebtoken');

const verifyToken=(req,res,next)=>{
    try {
        const token=req.cookies.token; //extract token from cookie
        if(!token){
            return res.status(401).json({
                success:false,
                message:"NO token available"
            }
            );
        }
        const decoded=jwt.verify(token,process.env.JWT_SECRET);
        req.user=decoded;

        next();

    } catch (error) {
        return res.status(401).json({
            success:false,
            message:"Invalid Authorization, Please try again"
        });
    }
}
module.exports=verifyToken;