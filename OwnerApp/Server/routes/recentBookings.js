const express =require('express');
const router = express.Router();
const db=require("../config/db");


router.get("/",(req,res)=>{
    


    db.query('select * from bookings,customers where bookings.cid=customers.id',function(error, rows,fields){
        if(error)console.log(error);

        else{
            console.log(rows);
            res.send(rows);
        }
    });
    
});


module.exports=router;