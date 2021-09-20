const express =require('express');
const router = express.Router();
const db=require("../config/db");


router.post('/editprofile',function(req, res){
    
    const FirstName=req.body.firstName;   
    const Email=req.body.email;  
    const Phone=req.body.phone; 

    const editProfile =  "UPDATE customers SET name = ?,email = ?, phone = ? WHERE id = 1";
    console.log(FirstName);
    db.query(editProfile,[FirstName,Email,Phone],(err,result)=>{
    res.json("SUCCESS");
     
     });


} );


router.get('/get',(req,res)=> {
    const sqlSelect = "SELECT * FROM customers WHERE id= 1";
    db.query(sqlSelect,(err,result)=>{
    res.send(result);  
    });
    });


module.exports=router;