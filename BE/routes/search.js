const express=require('express');
const router=express.Router();
const auth=require('../middleware/auth')

/**
 * @swagger
 * /search:
 *   get:
 *     summary: Search posts
 *     description: Search posts of authenticated user by title or message
 *     tags:
 *       - Posts
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         name: q
 *         required: true
 *         schema:
 *           type: string
 *         description: Search keyword
 *       - in: query
 *         name: limit
 *         required: false
 *         schema:
 *           type: integer
 *           default: 5
 *         description: Number of results
 *     responses:
 *       200:
 *         description: Search successful
 *       500:
 *         description: Search failed
 */
router.get('/search',auth,require('../controller/searchController'));

module.exports=router;