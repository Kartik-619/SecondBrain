const express=require('express');
const app=express();
const port=3009;
app.use(express.json());

app.use('/api',require('./routes/URL'));

app.listen(port,()=>{
    console.log('Express app');
});