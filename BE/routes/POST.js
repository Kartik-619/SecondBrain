const express=require('express');
const router=express.Router();

router.post('/writePost',require('../controller/POSTS/savePost'));

module.exports=router;