const express =require('express');
const router = express.Router();
const db=require("../config/db");

  
  
  


router.put("/",(req,res)=>{
    const pid=req.body.pid;
    const bid=req.body.bid;
         
          
    const today = new Date();
    const Time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();


let sql=`UPDATE parks SET slots=slots-1 where pid=? and slots>0`;
let sql1=`UPDATE bookings SET isScaned =1, timerOn =1 ,timerStartTime='${Time}' where bid='${bid}'`;
db.query(sql,[pid],(err,result)=>{

    if(err){
        console.log(err)
    }else{

        res.send("Park slot update");

        db.query(sql1,(err,result)=>{
               if(err){
                   console.log(err);
               }
        });
    }
  
       
 
    
   
});


});


module.exports=router;