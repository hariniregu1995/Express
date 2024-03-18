const mongoose=require('mongoose');
mongoose.connect(process.env.mongoDB_URL).then(()=>{
    console.log('db connected');
})
.catch(()=>{
    console.log('connection failed');
})