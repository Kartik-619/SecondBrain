const express = require("express");
const router = express.Router();
const verifyToken = require("../middleware/auth");

/**
 * @swagger
 * /logout:
 *   post:
 *     summary: Logout user
 *     description: Clears authentication cookie and logs out the user
 *     tags:
 *       - Authentication
 *     responses:
 *       200:
 *         description: Logged out successfully
 *       500:
 *         description: Internal Server Error
 */
router.get("/check-auth", verifyToken, (req, res) => {
    return res.status(200).json({
        success: true,
        user: {
            id: req.user.id,
            username:req.user.username,
            email: req.user.email
        }
    });
});

module.exports = router;