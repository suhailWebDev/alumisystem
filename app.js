const express=require('express');
const app=express();
const dotenv=require('dotenv');
const cors=require('cors');
const cookieParser=require('cookie-parser');
const auth=require('./middleware/auth');


dotenv.config({path:'./config.env'});
require('./db/conn');

app.use(cookieParser());

// app.get("/",(req,res)=>{
//     res.status(201).json("server created")
// });



const corsOptions ={
    origin:'http://localhost:3000', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200,
 }
 
 app.use(cors(corsOptions)) // Use this after the variable declaration

app.use(express.json());

app.use(require('./routes/router'));

const PORT=process.env.PORT;

app.get('validuser',function(req,res){
    console.log('cookies',req.cookies.usercookie);
})

app.listen(PORT,()=>{
    console.log(`server started on port no ${PORT}`)
})