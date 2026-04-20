const express=require('express');
const swaggerUi=require('swagger-ui-express');
const swaggerSpec=require('./docs/swagger');
const app=express();
const port=3009;
const cors = require('cors');
app.use(cors({
    origin: 'http://localhost:5173', // or '*' for dev only
    credentials: true
}));
app.use(express.json());

app.use('/api',require('./routes/URL'));
app.use('/api',require('./routes/POST'));
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.listen(port,()=>{
    console.log('Express app');
});