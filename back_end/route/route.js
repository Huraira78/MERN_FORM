const express= require('express');
const router=express.Router();
const logic=require('../controller/control.js')
router.post('/signIn',logic)
module.exports=router