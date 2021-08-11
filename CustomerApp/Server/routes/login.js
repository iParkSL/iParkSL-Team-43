const express =require('express');
const router = express.Router();
const db=require("../config/db");
const jwt =require("jsonwebtoken");
const bcrypt=require('bcrypt');

const  saltRounds=10;



// login
router.post("/",(req,res)=>{
    const email =req.body.email;
    const password =req.body.password;
    //validation
    if (!email || !password) {
        return res.status(400).json({ msg: "Please enter all fields" });
      }

      
    //sql for user
    let sqlCheckEmail=`SELECT *FROM CUSTOMERS WHERE EMAIL=?`;

   
    //check for existing user
    db.query(sqlCheckEmail,email,(err,user)=>{
        if(user.length<1){
            return res.status(400).json({msg:"user does not exists"});
        }else{
            let currentUser = user[0];

            // Validate password
            bcrypt.compare(password, user[0].password).then(isMatch => {
              if (!isMatch){
                return res.status(400).json({ msg: "Invalid credentials" });
              }else{
                res.json("SUCCESS");
              }
              const test={
                  username:"rashan",
                  id:1
              }
              jwt.sign({user:user},"mysecretkey",(err,token)=>{
                          res.json({token:token})
              })


            });


        }
        
    });
});

module.exports=router;