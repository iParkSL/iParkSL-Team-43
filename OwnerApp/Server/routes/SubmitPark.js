const express =require('express');
const router = express.Router();
const db=require("../config/db");

  

  


router.post("/",(req,res)=>{
    const parkname=req.body.parkName;
    const price=req.body.price;
    const slots=req.body.slots;
    const photo=req.body.photo;
    const description=req.body.description;
      
    const oid=req.body.oid;
    const latitude=req.body.lat;
    const longitude=req.body.lon;
    const action=0;

//check for existing user
let sql=`insert into parks(oid,parkname,latitude,longitude,slots,price,image1,description,review) values(?,?,?,?,?,?,?,?,?)`;
db.query(sql,[oid,parkname,latitude,longitude,slots,price,photo,description,action],(err,result)=>{

    if(err){
        console.log(err)
    }else{
        res.send("Park added");
    }
  
       
 
    
   
});


});


module.exports=router;