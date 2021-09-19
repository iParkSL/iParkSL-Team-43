const express =require('express');
const router = express.Router();
const db=require("../config/db");



router.get('/',function(req, res){
    const vehicleNo=req.body.vehicleNo; 
    

    const topParks = 
    `SELECT parks.pid AS id,parks.parkname AS name,parks.image1 AS img,parks.price AS price,a.count,parks.oid,parks.parkname,parks.slots,parks.price,parks.image2,parks.image3,parks.description 
    FROM parks 
    INNER JOIN
    (SELECT pid,COUNT(pid) AS count FROM bookings GROUP BY pid ORDER BY COUNT(pid) DESC LIMIT 10) AS a
    ON a.pid=parks.pid ORDER BY a.count DESC;`;

    db.query(topParks,(err,result)=>{
        res.json(result);        
        console.log(result);
    });

} );


module.exports=router;