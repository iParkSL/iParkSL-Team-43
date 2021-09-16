const express =require('express');
const router = express.Router();
const db=require("../config/db");


router.post('/',function(req, res){
    
    const FirstName=req.body.firstName; 
    const LastName=req.body.lastName; 
    const Email=req.body.email; 
    // const UserName=req.body.username; 
    // const Password=req.body.password; 
    const Phone=req.body.phone; 


    

     const editProfile =  "UPDATE customer SET FirstName = ?, LastName = ?, Email = ?, Phone = ? WHERE CustomerID = 1";
     

    db.query(editProfile,[FirstName,LastName,Email,Phone],(err,result)=>{
     console.log(err);
     });

} );


module.exports=router;