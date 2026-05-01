const express=require('express');
const router=express.Router();

router.post('/signUp',require('../controller/Auth/register'));

module.exports=router;