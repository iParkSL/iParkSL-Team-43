const express =require('express');
const router = express.Router();
const db=require("../config/db");




router.post("/physicalPayment",(req,res)=>{
    console.log(req);
  
      var id =req.body.id;
      console.log(id)
  
         
    var sqlquery=`update bookings set pmethod='P' where bid=${id}`;
    console.log(sqlquery);
    db.query(sqlquery,(err,result)=>{
        if(err){
            console.log(err);
        }else {
            res.json("SUCCESS");
        }
    });
         
      
  
  });
  router.get("/isPaid",(req,res)=>{
    
    var id=req.query.id;
    console.log(id);
    var query = `SELECT isPaid FROM bookings WHERE bid=${id}`;
    console.log(query);

    db.query(query,function(error, rows,fields){
        if(error)console.log(error);

        else{
            console.log(rows);
            res.send(rows);
        }
    });
    
});

module.exports=router;