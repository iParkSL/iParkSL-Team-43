const express =require('express');
const router = express.Router();
const db=require("../config/db");


router.get("/",(req,res)=>{
    


    var id=req.query.id
    // console.log(id);
    db.query(`select * from bookings,customers,parks where bookings.cid=customers.id and parks.oid=${id} and bookings.pid=parks.pid `,function(error, rows,fields){
        if(error)console.log(error);

        else{
            console.log(rows);
            res.send(rows);
        }
    });
    
});


module.exports=router;