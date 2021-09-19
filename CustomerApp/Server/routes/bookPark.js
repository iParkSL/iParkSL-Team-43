const express =require('express');
const router = express.Router();
const db=require("../config/db");


router.post('/',function(req, res){
    const vehicleNo=req.body.vehicleNo; 
    const vehicleType=req.body.vehicleType; 
    const paymentMethod=req.body.paymentMethod; 
    const QrCode=req.body.QrCode; 
    const CustomerID=req.body.CustomerID; 
    const ParkID=req.body.ParkID; 
    const EstimatedDuration=req.body.EstimatedDuration; 
    const TimerStart=0;
    const TimerEnd=0;
    const TimerOn=0;
    const isActive=1;
    const isScaned=0;


    var today = new Date();
    var Time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();

    const bookPark = `insert into bookings(cid,pid,vtype,vehicleNo,pmethod,EstimatedTime,Qrid,time,date,timerStartTime,	timerEndTime,timerOn,isActive,isScaned) values(?,?,?,?,?,?,?,?,?,?,?,?,?,?)`;

    db.query(bookPark,[CustomerID,ParkID,vehicleType,vehicleNo,paymentMethod,EstimatedDuration,QrCode,Time,date,TimerStart,TimerEnd,TimerOn,isActive,isScaned],(err,result)=>{
        res.json("SUCCESS");
    });

} );


module.exports=router;