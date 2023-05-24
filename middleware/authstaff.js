const jwt = require("jsonwebtoken");
const StaffUser = require("../models/staffSchema");
const dotenv=require('dotenv');

dotenv.config({path:'./config.env'});

const keysecret = process.env.SECRET_KEY

const authstaff = async(req,res,next)=>{

    try {
        const token = req.headers.authorization;
        console.log(token);
        
        const verifytoken = jwt.verify(token,keysecret);
        
        const rootUser = await StaffUser.findOne({_id:verifytoken._id,"tokens.token":token});
        
        
        if(!rootUser) {throw new Error("user not found")}

        req.token = token;
        req.rootUser = rootUser;
        req.userId = rootUser._id;

        console.log(rootUser);
        next();

    } catch (error) {
        res.status(401).json({status:401,message:"Unauthorized no token provide"})
    }
}


module.exports = authstaff