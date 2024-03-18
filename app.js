const express=require('express');
const morgan=require('morgan');
const dotenv=require('dotenv');
const app=new express();
const studentRoute=require('./Routes/studentRoute');
app.use(morgan('dev'));
dotenv.config();
const PORT=process.env.PORT;
const db=require('./db/mongoDb');
app.use('/student',studentRoute);
app.listen(PORT,()=>{
    console.log(`server is running at port ${PORT}`);
})









// const express=require('express');
// const app= new express();
// const morgan=require('morgan');
// app.use(morgan('dev'));
// const PORT=5000;
// app.get('/home',(req,res)=>{
//     res.send('This is my home page');
// })
// app.listen(PORT,()=>{
//     console.log('connected');
// })