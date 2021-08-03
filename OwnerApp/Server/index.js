const express=require("express");
const app =express();

app.use(express.json());
const db=require("./models");


const usersRouter=require("./routes/Users");
app.use("/auth",usersRouter);


db.sequelize.sync().then(()=>{
app.listen(8080,()=>{
    console.log("Server running on port 8080");
});
});