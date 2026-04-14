const express=require('express');
const router=express.Router();

const getURL=require('../controller/URL/saveURL.js');
const readURL=require('../controller/URL/fetchURL.js');
router.post('/writeURL',getURL);
router.get('/readURL',readURL);
router.delete('/deleteURL',require('../controller/URL/deleteURL.js'));
router.patch('/updateURL',require('../controller/URL/updateURL.js'));

module.exports=router;