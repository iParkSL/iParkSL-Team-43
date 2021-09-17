const express =require('express');
const router = express.Router();
const db=require("../config/db");






router.get("/",(req,res)=>{
    
    let sql= `SELECT parkname AS name,latitude,longitude  FROM parks WHERE review='1'`;
   db.query(sql,(err,result)=>{
        if(err) throw err;
        
        // const array= [result.length-1];
        // for(let i=0;i<result.length;i++){
        //     array[i]=result[i].parkname;   
        // }

        // const results = array.forEach((item, i) => {
        //     item.id = i + 1;
        //   });
        console.log(result);
        res.send(result);  
        // console.log(results);
        // res.send(results);
   });
});
module.exports=router;   