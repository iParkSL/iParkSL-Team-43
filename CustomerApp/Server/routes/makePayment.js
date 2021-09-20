const express =require('express');
const router = express.Router();
const db=require("../config/db");


router.get("/timeDiff",(req,res)=>{
    
    var id=req.query.id;
    console.log(id);
    var query = `SELECT ROUND(TIME_TO_SEC(TIMEDIFF(endTime,startTime))/60,0.1) as time FROM bookings WHERE bid=${id}`;
    console.log(query);

    db.query(query,function(error, rows,fields){
        if(error)console.log(error);

        else{
            console.log(rows);
            res.send(rows);
        }
    });
    
});

router.get("/price",(req,res)=>{
    
    var id=req.query.id;
    console.log(id);
    var query = `SELECT parks.price FROM bookings,parks WHERE bookings.bid=${id} and bookings.pid=parks.pid`;
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