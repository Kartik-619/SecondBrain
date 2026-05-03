const express=require('express');
const router=express.Router();
const auth=require('../middleware/auth');

router.get('/myposts',auth,require('../controller/fetchAll'));
module.exports=router;