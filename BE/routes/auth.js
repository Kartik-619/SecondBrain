const express=require('express');
const router=express.Router();

/**
 * @swagger
 * /signUp:
 *   post:
 *     summary: Register a new user
 *     description: Create a new account
 *     tags:
 *       - Authentication
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - username
 *               - email
 *               - password
 *             properties:
 *               username:
 *                 type: string
 *                 example: kartik
 *               email:
 *                 type: string
 *                 example: kartik@gmail.com
 *               password:
 *                 type: string
 *                 example: password123
 *     responses:
 *       201:
 *         description: User registered successfully
 *       400:
 *         description: Invalid input
 *       409:
 *         description: User already exists
 *       500:
 *         description: Internal Server Error
 */
router.post('/signUp',require('../controller/Auth/register'));

/**
 * @swagger
 * /login:
 *   post:
 *     summary: Login user
 *     description: Authenticate a user and return JWT token
 *     tags:
 *       - Authentication
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - password
 *             properties:
 *               email:
 *                 type: string
 *                 example: user@gmail.com
 *               password:
 *                 type: string
 *                 example: mypassword123
 *     responses:
 *       200:
 *         description: Login successful
 *       401:
 *         description: Invalid credentials
 *       500:
 *         description: Internal Server Error
 */
router.post('/login',require('../controller/Auth/login'));
router.post('/logout',require('../controller/Auth/logout'));
module.exports=router;