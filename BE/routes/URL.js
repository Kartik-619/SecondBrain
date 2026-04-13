const express=require('express');
const router=express.Router();

const getURL=require('../controller/URL/saveURL.js');
const readURL=require('../controller/URL/fetchURL.js');
router.post('/writeURL',getURL);
router.get('/readURL',readURL);

module.exports=router;