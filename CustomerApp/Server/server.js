const express =require('express');
//const mysql=require('mysql');
const cors =require('cors');
const bodyParser=require("body-parser");
const cookieParser=require("cookie-parser");
const session=require("express-session");
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
app.use("/FindPark",require("./routes/FindPark"));
app.use("/parkSearch",require("./routes/parkSearch"));


app.use("/visitedParks",require("./routes/visitedParks"));
app.use("/book",require('./routes/bookPark'));
app.use("/reviews",require("./routes/parkReview"));
app.use("/timerOn",require("./routes/timerOn"));
app.use("/upComing",require("./routes/upCommingRoute"));
app.use("/isScaned",require("./routes/isScaned"));
app.use("/topParks",require("./routes/topParks"));
app.use("/forgetPassword",require("./routes/forgetPassword"));
app.use("/resetPassword",require("./routes/resetPassword"));
app.use("/checkCode",require("./routes/checkCode"));
app.use("/getEmails",require("./routes/getEmails"));
app.use("/api",require("./routes/editProfile"));
app.use("/makePayment",require("./routes/makePayment"));
app.use("/physicalPayment",require("./routes/physicalPayment"));
app.use("/reviewForm",require("./routes/reviewForm"));

app.listen('8080',()=>{
    console.log('Server started on port 8080');
});