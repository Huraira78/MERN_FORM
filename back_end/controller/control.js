const FormDaTa=require('../models/form.js')
const bcrypt=require('bcrypt')
const logic= async (req,res)=>{
    const generateSalt= await bcrypt.genSalt(10)
    const bcryptPassword=await bcrypt.hash(req.body.Password, generateSalt)
    const registration=new FormDaTa({
        Name:req.body.Name,
        Email:req.body.Email,
        Number:req.body.Number,
        // Password:req.body.Password
        Password:bcryptPassword
    })
    registration.save(()=>{
        try {
            console.log('Data Sending successfully')
        } catch (error) {
            console.log('Error')
        }
    })
    res.send(req.body)

    // res.send('done');
}
module.exports=logic