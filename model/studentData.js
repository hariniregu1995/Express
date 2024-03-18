const mongoose=require('mongoose');
const StudentSchema=mongoose.Schema({
    name:String,
    age:Number
})
const studentData=mongoose.model('registration',StudentSchema);
module.exports=studentData;