const express =require('express');
const router = express.Router();
const db=require("../config/db");

  
  
  
     

router.put("/",(req,res)=>{
    const parkname=req.body.parkName;
    const price=req.body.price;
    const slots=req.body.slots;
    const photo1=req.body.photo1;
    const photo2=req.body.photo2;
    const photo3=req.body.photo3;
    const description=req.body.description;
      
    const oid=req.body.oid;
    const latitude=req.body.lat;
    const longitude=req.body.lon;
    // const action=0;  

//check for existing user
let sql=`UPDATE parks SET parkname=?,latitude=?,longitude=?,slots=?,price=?,image1=?,image2=?,image3=?,description=? where oid=?`;
db.query(sql,[parkname,latitude,longitude,slots,price,photo1,photo2,photo3,description,oid],(err,result)=>{

    if(err){
        console.log(err)
    }else{
        res.send("Park updated");
    }
  
       
 
    
   
});


});


module.exports=router;