const express=require('express');
const router=express.Router();

router.post('/signUp',require('../controller/Auth/register'));
router.post('/login',require('../controller/Auth/login'));
module.exports=router;