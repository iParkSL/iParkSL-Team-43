const express =require('express');
const router = express.Router();
const db=require("../config/db");

  

  


router.post("/",(req,res)=>{
    const id=req.body.pid;
    
      


let sql=`UPDATE parks SET slots=slots-1 where pid=? and slots>0`;
db.query(sql,[id],(err,result)=>{

    if(err){
        console.log(err)
    }else{
        res.send("Park slot update");
    }
  
       
 
    
   
});


});


module.exports=router;