const express =require('express');
const router = express.Router();
const db=require("../config/db");


router.get("/",(req,res)=>{
    
    var email=req.query.email;
    console.log(email);
    var query = `select passwordCode from customers where email=${email}`;
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