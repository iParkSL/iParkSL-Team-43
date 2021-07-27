const express= require("express");
const router =express.Router();
const {Users} =require("../models");
const bcrypt =require("bcrypt");



router.post("/",async(req,res)=>{
    const{email,password}=req.body;
    bcrypt.hash(password,10).then((hash)=>{
       Users.create({
           email:email,
           password:hash,
       });
       res.json("SUCCESS");
    });

});

router.post("/login",async(req,res)=>{
    const {email,password}=req.body;
    const user =await Users.findOne({where:{email:email}});

    if(!user) res.json({error:"User Doesn't Exits"});

    bcrypt.compare(password,user.password).then(async(match)=>{
        if (!match) res.json({error:"wrong Username And Password Combination"});

        res.json("you Logged In!!");
    });
});

module.exports=router;