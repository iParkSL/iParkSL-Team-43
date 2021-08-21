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


    var today = new Date();
    var Time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();

    const bookPark = `insert into booking(vehicleNo,vehicleType,paymentMethod,QrCode,CustomerID,ParkID,EstimatedDuration,Date,Time) values(?,?,?,?,?,?,?,?,?)`;

    db.query(bookPark,[vehicleNo,vehicleType,paymentMethod,QrCode,CustomerID,ParkID,EstimatedDuration,date,Time],(err,result)=>{
        res.json("SUCCESS");
    });

} );


module.exports=router;