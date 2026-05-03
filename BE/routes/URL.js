const express=require('express');
const router=express.Router();
const auth=require('../middleware/auth.js')
const getURL=require('../controller/URL/saveURL.js');
const readURL=require('../controller/URL/fetchURL.js');
router.post('/writeURL',auth,getURL);
router.get('/readURL',auth,readURL);
router.delete('/deleteURL',auth,require('../controller/URL/deleteURL.js'));
router.patch('/updateURL',auth,require('../controller/URL/updateURL.js'));

module.exports=router;