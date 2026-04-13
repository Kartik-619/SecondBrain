const express=require('express');
const app=express();
const port=3009;
app.get('/',(req,res)=>{
    res.send("hello");
});
app.listen(port,()=>{
    console.log('Express app');
});