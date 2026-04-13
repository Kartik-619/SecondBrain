const express=require('express');
const router=express.Router();

const getURL=require('../controller/saveURL.js');
router.post('/writeURL',getURL);

module.exports=router;