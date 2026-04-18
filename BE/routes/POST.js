const express=require('express');
const router=express.Router();

router.post('/writePost',require('../controller/POSTS/savePost'));
router.patch('/updatePost',require('../controller/POSTS/updatePost'));
router.get('/getPost',require('../controller/POSTS/fetchPost'));
router.delete('/deletePost',require('../controller/POSTS/deletePost'));

module.exports=router;