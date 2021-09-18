const express =require('express');
const router = express.Router();
const db=require("../config/db");

const bcrypt=require('bcrypt');
const  saltRounds=10;






router.post("/",(req,res)=>{
    const name=req.body.name;
    const email=req.body.email;
    const password=req.body.password;
    const cpassword=req.body.cpassword;

    
  // query for users
 
  let sqlCheckEmail = `SELECT * FROM customers WHERE email = ?`;

  // Simple validation

    if(!name||!email||!password||!cpassword){
        return res.status(400).json({msg:"Please enter all fields"});

    }

    if(password!==cpassword){
      return res.status(400).json({msg:"Please Confim your password"});
    }


//check for existing user

db.query(sqlCheckEmail,email,(err,user)=>{
    if(user.length>0){
        return res.status(400).send("User already registered");
    }else{
        let sql=`insert into customers(name,email,password) values(?,?,?)`;
 bcrypt.hash(password,saltRounds,(err,hash)=>{  

    if(err){
       console.log(err)
    }

  
    
    db.query(sql,[name,email,hash],(err,result)=>{
        console.log(err);
    });
   

})
    }
    res.json("SUCCESS");
});


});


module.exports=router;