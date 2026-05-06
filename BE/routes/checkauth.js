const express = require("express");
const router = express.Router();
const verifyToken = require("../middleware/auth");

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