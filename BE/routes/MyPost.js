const express=require('express');
const router=express.Router();

router.get('/myposts',require('../controller/fetchAll'));
module.exports=router;