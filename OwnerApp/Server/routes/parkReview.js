const express =require('express');
const router = express.Router();
const db=require("../config/db");


router.get("/",(req,res)=>{
    const ID = req.query.pid;
    // console.log(req);
    // const ID = "hello";
    console.log(ID);
    // let squery=`select * from reviews`;

    db.query(`select * from reviews where pid=${ID}`,function(error, rows,fields){
        if(error)console.log(error);

        else{
            console.log(rows);
            res.send(rows);
        }
    });
    
});


module.exports=router;