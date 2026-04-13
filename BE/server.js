const express=require('express');
const app=express();
const port=3009;
app.use(express.json());

app.get('/',(req,res)=>{
    res.send("hello");
});

app.post('/link',(req,res)=>{
   const {message}=req.body;
   console.log(message);
   res.status(201).json({
    message:message,
    data:message
   })

})
app.listen(port,()=>{
    console.log('Express app');
});