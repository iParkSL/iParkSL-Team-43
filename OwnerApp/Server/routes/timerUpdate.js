const express =require('express');
const router=express.Router();
const db=require("../config/db");


router.put("/",(req,res)=>{
    const bid=req.body.bid;

           
    var today = new Date();
    var Time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();


    let sql=`UPDATE bookings SET timerOn=0 ,timerEndTime='${Time}' where bid='${bid}'`;
    db.query(sql,(err,result)=>{
               if(err){
                  console.log(err)
               }else{  
                

                     res.send("timer stoped");
                     console.log(result);
    
                   

               }
    });

});

   
router.get("/",(req,res)=>{
    const bid=req.query.bid;
    console.log(bid);
   
    let sql1='SELECT * FROM bookings where bid=?';

    db.query(sql1,[bid],(err,result)=>{
        
         if(err){
             console.log(err);
         }else{
            res.json(result);
            console.log(result);  

         }
     });
    
});

module.exports=router;