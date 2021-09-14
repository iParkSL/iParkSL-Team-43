const express =require('express');
const router = express.Router();
const db=require("../config/db");
const jwt =require("jsonwebtoken");
const bcrypt=require('bcrypt');
var nodemailer = require('nodemailer');

const  saltRounds=10;



// login
router.post("/",(req,res)=>{
  console.log(req);

    var email =req.body.email;
    var password =req.body.password;
    console.log(email)
    console.log(password)
    bcrypt.hash(password,saltRounds,(err,hash)=>{  

        if(err){
           console.log(err)
        }
        var sqlquery=`update customers set password='${hash}' where email=${email}`;
        console.log(sqlquery);
        db.query(sqlquery,(err,result)=>{
            if(err){
                console.log(err);
            }else {
                res.json("SUCCESS");
            }
        });
       
    
    })

});

module.exports=router;