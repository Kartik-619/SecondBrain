const express=require('express');
const router=express.Router();
const auth=require('../middleware/auth');


/**
 * @swagger
 * /myposts:
 *   get:
 *     summary: Fetch all posts of authenticated user
 *     description: Returns all posts created by the logged-in user
 *     tags:
 *       - Posts
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Posts retrieved successfully
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Internal Server Error
 */
router.get('/myposts',auth,require('../controller/fetchAll'));
module.exports=router;