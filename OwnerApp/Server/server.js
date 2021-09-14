const express =require('express');
//const mysql=require('mysql');
// const cors =require('cors');
// const bodyParser=require("body-parser");
// const cookieParser=require("cookie-parser");
// const session=require("express-session");
//const config=require("config");
const jwt =require("jsonwebtoken");

const db=require("./config/db");
//const auth=require("../Server/middleware/auth");
const bcrypt=require('bcrypt');
const  saltRounds=10;

    
         

const app =express();

app.use(express.json());

//use routes

app.use("/register",require("./routes/register"));
app.use("/login",require("./routes/login"));
app.use("/SubmitPark",require("./routes/SubmitPark"));
app.use("/UpdateSubmitPark",require("./routes/UpdateSubmitPark"));
app.use("/myParks",require("./routes/myParksRoute"));
app.use("/reviews",require("./routes/parkReview"));
app.use("/recentBookings",require("./routes/recentBookings"));
app.use("/receivePayments",require("./routes/receivePayments"));
app.use("/SubmitPark",require("./routes/SubmitPark"));
app.use("/ViewMap",require("./routes/ViewMap"));

app.use("/SlotUpdate",require("./routes/SlotUpdate"));
app.use("/forgetPassword",require("./routes/forgetPassword"));
app.use("/resetPassword",require("./routes/resetPassword"));
app.use("/checkCode",require("./routes/checkCode"));
app.use("/getEmails",require("./routes/getEmails"));



app.listen('8080',()=>{
    console.log('Server started on port 8080');
});