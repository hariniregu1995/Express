const express=require('express');
const router=express.Router();
const Studentmodel=require('../model/studentData');
router.get('/',async(req,res)=>{
try {
   const data=await Studentmodel.find();
   res.status(200).send(data);
} catch (error) {
   res.status(404).send('no data found');
}
})

module.exports=router;