const { prisma } = require("./../prisma/lib/prisma");

const searchPosts=async(req,res)=>{
    try {
        const id=req.user.id;
        if(!id){
            return res.status(401).json({
                success:false,
                message:"User not recognized"
            });
        }
        const query=req.query.q;
        if (!query?.trim()) {
            return res.json([]);
          }
          const posts =
          await prisma.post.findMany({
    
            where: {
                authorId:id,
              OR: [
                {
                  title: {
                    contains: query,
                    mode: "insensitive",
                  },
                },
    
              ],
            },
    
            take: 5,
          });
    
        res.status(200).json(posts);

        
    } catch (error) {
        console.log(error);

        res.status(500).json({
          message: "Search failed",
        });
    }
}
module.exports=searchPosts;