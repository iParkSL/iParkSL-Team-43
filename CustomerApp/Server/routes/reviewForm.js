const express =require('express');
const router = express.Router();
const db=require("../config/db");




// login
router.post("/insert",(req,res)=>{
  console.log(req);

    var id =req.body.id;
    var pid =req.body.pid;
    var response =req.body.response;

    console.log(id)
    console.log(response)
    // var query=`select pid bookings where bid=${bid}`
        
        var sqlquery=`insert into reviews(pid,cid,description) values(${pid},${id},'${response}')`;
        console.log(sqlquery);
        db.query(sqlquery,(err,result)=>{
            if(err){
                console.log(err);
            }else {
                res.json("SUCCESS");
            }
        });
       
    

});
router.get("/getPid",(req,res)=>{
    
    var id=req.query.id;
    console.log(id);
    var query = `SELECT pid from bookings where bid=${id}`;
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