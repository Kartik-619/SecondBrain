const express=require('express');
const router=express.Router();

router.post('/writePost',require('../controller/POSTS/savePost'));
router.patch('/updatePost',require('../controller/POSTS/updatePost'));
module.exports=router;