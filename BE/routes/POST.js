const express = require('express');
const router = express.Router();

/**
 * @swagger
 * /writePost:
 *   post:
 *     summary: Create a new post
 *     description: Add a new post to the database with title, message and linked to an author via authorId
 *     tags:
 *       - Posts
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - authorId
 *               - title
 *             properties:
 *               authorId:
 *                 type: string
 *                 description: ID of the author (user)
 *               title:
 *                 type: string
 *                 description: Title of the post
 *               message:
 *                 type: string
 *                 description: Content of the post (optional field)
 *     responses:
 *       200:
 *         description: Post successfully created
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: object
 *                   description: The created post object
 *       400:
 *         description: Bad request - Missing authorId or title
 *       500:
 *         description: Internal server error
 */

router.post('/writePost', require('../controller/POSTS/savePost'));
/**
 * @swagger
 * /updatePost:
 *  patch:
 *      summary: Update an exisiting post
 *      tags:
 *          - Posts
 *      responses:
 *          200:
 *              description: Post updated successfully
 *          500: 
 *              description : Internal Server Error
 */
router.patch('/updatePost', require('../controller/POSTS/updatePost'));
router.get('/getPost', require('../controller/POSTS/fetchPost'));
router.delete('/deletePost', require('../controller/POSTS/deletePost'));

module.exports = router;