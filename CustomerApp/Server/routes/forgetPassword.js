const express =require('express');
const router = express.Router();
const db=require("../config/db");
const jwt =require("jsonwebtoken");
const bcrypt=require('bcrypt');
var nodemailer = require('nodemailer');

const  saltRounds=10;



// login
router.post("/",(req,res)=>{
  // console.log(res);

    var email =req.body.email;
    
    var transporter = nodemailer.createTransport({
      service:'gmail',
      auth:{
        user:'iparksrilanka@gmail.com',
        pass:'iParkSL#43'
      }
    })

    var val = Math.floor(1000 + Math.random() * 9000);
    var sqlQuery =`update customers set passwordCode=${val} where email=${email}`;
    // console.log(sqlQuery);
    db.query(sqlQuery,function(error, rows,fields){
      if(error)console.log(error);

        // else{
        //     console.log(rows);
        //     res.send(rows);
        // }
    });
    
    var mailOptions = {
      from: 'iparksrilanka@gmail.com',
      to: 'trchamod98@gmail.com',
      subject: 'Sample',
      text: `hello ${val}`
    };

    transporter.sendMail(mailOptions, function(error, info){
      if(error){
        console.log(error);
      }else{
        console.log('Email sent :' + info.response);
        res.json("SUCCESS");
      }
    });

});

module.exports=router;