const express = require('express');
const router = express.Router();
const auth=require('../middleware/auth');

/**
 * @swagger
 * /writePost:
 *   post:
 *     summary: Create a new post
 *     description: Create a new post for the authenticated user
 *     tags:
 *       - Posts
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - title
 *             properties:
 *               title:
 *                 type: string
 *                 example: My First Post
 *               message:
 *                 type: string
 *                 example: Hello world
 *     responses:
 *       200:
 *         description: Post created successfully
 *       400:
 *         description: Missing required fields
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Internal server error
 */
router.post('/writePost', auth,require('../controller/POSTS/savePost'));
/**
 * @swagger
 * /updatePost/{id}:
 *   put:
 *     summary: Update an existing post
 *     description: Update title and message of a post
 *     tags:
 *       - Posts
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the post
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - title
 *             properties:
 *               title:
 *                 type: string
 *                 example: Updated Post Title
 *               message:
 *                 type: string
 *                 example: Updated content
 *     responses:
 *       200:
 *         description: Post updated successfully
 *       400:
 *         description: Invalid request
 *       401:
 *         description: Unauthorized
 *       404:
 *         description: Post not found
 *       500:
 *         description: Internal Server Error
 */
router.put('/updatePost/:id',auth, require('../controller/POSTS/updatePost'));

/**
 * @swagger
 * /getPost/{id}:
 *   get:
 *     summary: Get a post by ID
 *     description: Fetch a specific post belonging to the authenticated user
 *     tags:
 *       - Posts
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID of the post
 *     responses:
 *       200:
 *         description: Post fetched successfully
 *       400:
 *         description: Invalid post ID
 *       404:
 *         description: Post not found
 *       500:
 *         description: Internal Server Error
 */
router.get('/getPost/:id',auth, require('../controller/POSTS/fetchPost'));
/**
 * @swagger
 * /deletePost/{id}:
 *   delete:
 *     summary: Delete a post
 *     description: Delete a post belonging to the authenticated user
 *     tags:
 *       - Posts
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID of the post
 *     responses:
 *       200:
 *         description: Post deleted successfully
 *       400:
 *         description: Invalid post ID
 *       404:
 *         description: Post not found
 *       500:
 *         description: Internal Server Error
 */
router.delete('/deletePost/:id',auth, require('../controller/POSTS/deletePost'));

module.exports = router;