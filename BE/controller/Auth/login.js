const { prisma } = require("../../prisma/lib/prisma");
const jwt = require('jsonwebtoken');

const LoginController = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({ success: false, message: 'Fields are incomplete' });
        }

        const user = await prisma.user.findUnique({
            where: {
                email
            }
        });

        if (!user) {
            return res.status(400).json({
                success: false,
                message: 'The user does not exist'
            });
        }

        if (password !== user.password) {
            return res.status(401).json({
                success: false,
                message: 'Password does not match'
            });
        }
        const token = jwt.sign({
            id: user.id,
            username: user.username,
            email: user.email
        }, process.env.JWT_SECRET, {
            expiresIn: '1h'
        })

        res.cookie("token",token,{
           httpOnly:true,
           secure:false,
           sameSite:"lax", //prevents CSRF
           maxAge:7 * 24 * 60 * 60 * 1000,
        })

        return res.status(200).json({
            success: true,
            token,
            message: 'Login successful',
            user: {
                id: user.id,
                username: user.username,
                email: user.username
            }
        });

    } catch (e) {
        console.error(e);
        return res.status(500).json({
            success: false,
            message: 'Internal Server Error'
        });
    }
}

module.exports = LoginController