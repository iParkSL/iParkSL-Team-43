// const express =require('express');
// //const mysql=require('mysql');
// const cors =require('cors');
// const bodyParser=require("body-parser");
// const cookieParser=require("cookie-parser");
// const session=require("express-session");
// //const config=require("config");
// const jwt =require("jsonwebtoken");

// const db=require("./config/db");
// //const auth=require("../Server/middleware/auth");
// const bcrypt=require('bcrypt');
// const  saltRounds=10;

    
// // //create connection
// // const db=mysql.createConnection({
// //     host     : 'localhost',
// //     user     : 'root',
// //     password : '',
// //     database:'iparksl',
   
// // });

// // //connect
// // db.connect((err)=>{
// //     if(err){
    
// //             throw err;
        
// //     }
// //     console.log("Mysql connected");
// // });


// const app =express();

// app.use(express.json());

// //app.use(express.json());
// // app.use(
// //    cors({
// //        origin:["http://localhost:8080"],
// //        methods:["GET","POST"],
// //        credentials:true,
// //    })

// // );


// // app.use(cookieParser());
// // app.use(bodyParser.urlencoded({extended:true}));

// // app.use(

// // session({
// //     key:"userID",
// //     secret:"subscribe",
// //     resave:false,
// //     saveUninitialized:false,
// //     cookie:{
// //         expires:60*60*24,
// //     },
// // })

// // );





// app.post("/register",(req,res)=>{
//     const name=req.body.name;
//     const email=req.body.email;
//     const password=req.body.password;
//     const cpassword=req.body.cpassword;

    
//   // query for users
 
//   let sqlCheckEmail = `SELECT * FROM customers WHERE email = ?`;

//   // Simple validation

//     if(!name||!email||!password||!cpassword){
//         return res.status(400).json({msg:"Please enter all fields"});

//     }

//     if(password!==cpassword){
//       return res.status(400).json({msg:"Please Confim your password"});
//     }


// //check for existing user

// db.query(sqlCheckEmail,email,(err,user)=>{
//     if(user.length>0){
//          return res.status(400).json({msg:"this user already"});
//     }else{
//         let sql=`insert into customers(name,email,password) values(?,?,?)`;
//  bcrypt.hash(password,saltRounds,(err,hash)=>{  

//     if(err){
//        console.log(err)
//     }

  
    
//     db.query(sql,[name,email,hash],(err,result)=>{
//         console.log(err);
//     });
   

// })
//     }
//     res.json("SUCCESS");
// });








// });

// // login
// app.post("/login",(req,res)=>{
//     const email =req.body.email;
//     const password =req.body.password;
//     //validation
//     if (!email || !password) {
//         return res.status(400).json({ msg: "Please enter all fields" });
//       }

      
//     //sql for user
//     let sqlCheckEmail=`SELECT *FROM CUSTOMERS WHERE EMAIL=?`;

   
//     //check for existing user
//     db.query(sqlCheckEmail,email,(err,user)=>{
//         if(user.length<1){
//             return res.status(400).json({msg:"user does not exists"});
//         }else{
//             let currentUser = user[0];

//             // Validate password
//             bcrypt.compare(password, user[0].password).then(isMatch => {
//               if (!isMatch){
//                 return res.status(400).json({ msg: "Invalid credentials" });
//               }else{
//                 res.json("SUCCESS");
//               }
//               const test={
//                   username:"rashan",
//                   id:1
//               }
//               jwt.sign({user:user},"mysecretkey",(err,token)=>{
//                           res.json({token:token})
//               })


//             });


//         }
        
//     });







//     // let sql =`select * from customers where email=? and password=?`;

//     // db.query(sql,[email,password],(err,result)=>{
//     //       if(err){
//     //       res.send({err:err})
//     //       }
//     //           if(result.length>0){
//     //               bcrypt.compare(password,result[0].password,(error,response)=>{
//     //                     if(response){

//     //                         req.session.user=result;
//     //                         console.log(req.session.user);
//     //                         res.send(result);
//     //                     }else{
//     //                         res.send({message:"wrong username/password "});
//     //                     }
//     //               }

//     //               );
//     //           }else{
//     //               res.send({message:"user doesn't exist"});
//     //           }
          
//     // });

   
// });



// // app.get("/login",auth,(req,res)=>{
// //     const token=req.header("x-auth-token");
// //     let sqlCheckUserId=`SELECT *FROM CUSTOMERS WHERE id=?`;
// //     db.query(sqlCheckUserId,req.user.id,(err,user)=>{
// //         if(user.length>0){
// //             return res.json({
// //                 user:user[0],
// //                 token
// //             });
// //         }
// //     });
// // });







// // // create Db

// // app.get('/createdb',(req,res)=>{
        
// //     let sql='CREATE DATABASE iparksl';
// //     db.query(sql,(err,result)=>{
// //         if(err) throw err;
// //         console.log(result);
// //         res.send('Database created...');
// //     });
// // });

// // //create table
// // app.get('/createpoststable',(req,res)=>{
// //        let sql='CREATE TABLE CUSTOMERS(id int AUTO_INCREMENT,email VARCHAR(255),password VARCHAR(255),PRIMARY KEY(id))';
// //        db.query(sql,(err,result)=>{
// //            if(err) throw err;
// //            console.log(result);
// //            res.send('posts table created...');
// //        });
// // });


// // //Insert post 1
// // app.get('/addpost',(req,res)=>{
// //     let post={email:'rashan@gmail.com',password:'123456'};
// //     let sql='Insert into customers set ?';
// //     let query=db.query(sql,post,(err,result)=>{
// //         if(err)throw err;
// //         console.log(result);
// //         res.send('post 1...');
// //     });
// // });

// // //select record
// // app.get('/getposts',(req,res)=>{
// //   let sql = 'select * from customers';
// //   let query=db.query(sql,(err,results)=>{
// //         if(err) throw err;
// //         console.log(results);
// //         res.send('posts fetched ......');
// //   });
// // });


// // // select single post

// // app.get('/getposts/:id',(req,res)=>{
// //     let sql=`select *from customers where id= ${req.params.id}`;

// //     let query=db.query(sql,(err,results)=>{
// //           if(err) throw err;
// //           console.log(results);
// //           res.send('Posts fetched....');
// //     });

// // });

// // //update post

// // app.get('/updatepost/:id',(req,res)=>{
    
// //     let sql=`update customers set email='malith@gmail.com' where id=${req.params.id}`;

// //     let query=db.query(sql,(err,result)=>{
// //         if(err) throw err;
// //         console.log(result);
// //         res.send('post fetched....');
// //     });

// // });




// app.listen('8080',()=>{
//     console.log('Server started on port 8080');
// });