const express=require('express');
const router=express.Router();
const auth=require('../middleware/auth')

router.get('/search',auth,require('../controller/searchController'));

module.exports=router;