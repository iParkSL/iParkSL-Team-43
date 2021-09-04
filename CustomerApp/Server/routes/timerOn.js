const express =require('express');
const router = express.Router();
const db=require("../config/db");


router.get("/",(req,res)=>{
    
    var id=req.query.id;
    var pa=req.query.pa;
    console.log(id);
    console.log(pa);

    db.query(`select timerOn from bookings where bookings.bid=${id}`,function(error, rows,fields){
        if(error)console.log(error);

        else{
            console.log(rows);
            res.send(rows);
        }
    });
    
});


module.exports=router;