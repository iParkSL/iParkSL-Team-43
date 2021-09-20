const express =require('express');
const router = express.Router();
const db=require("../config/db");




// login
router.post("/",(req,res)=>{
  console.log(req);

    var id =req.body.id;
    var bid =req.body.bid;
    var response =req.body.response;

    console.log(id)
    console.log(response)
    // var query=`select pid bookings where bid=${bid}`
        
        var sqlquery=`insert into reviews(pid,cid,)`;
        console.log(sqlquery);
        db.query(sqlquery,(err,result)=>{
            if(err){
                console.log(err);
            }else {
                res.json("SUCCESS");
            }
        });
       
    

});

module.exports=router;