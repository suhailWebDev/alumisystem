const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const dotenv=require('dotenv');
dotenv.config({path:'./config.env'});

const keysecret = process.env.SECRET_KEY;


const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    profilePhoto:{
        type:String,
        required:true
    },
    birth:{
        type:Date,
        required:true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error("not valid email")
            }
        }
    },
    contact:{
        type:Number,
        required:true
    },
    passyear:{
        type:Number,
        required:true
    },
    course:{
        type:String,
        required:true
    },
    occupation:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    confirmpassword:{
        type:String,
        required:true
    },
    tokens:[
        {
            token:{
                type:String,
                required:true
            },
        }
    ]
});





// hash password

userSchema.pre("save",async function(next){
    if(this.isModified('password')){
        this.password=await bcrypt.hash(this.password,12);
        this.confirmpassword=await bcrypt.hash(this.confirmpassword,12);
    }
    next();
})


// token generate
userSchema.methods.generateAuthtoken = async function () {
    try {
        let token=jwt.sign({_id:this._id},keysecret,{expiresIn:"1d"});
        this.tokens=this.tokens.concat({token:token});
        await this.save();
        return token;
    } catch (error) {
        console.log(error);
    }
}


// createing model
const AlumniUser = new mongoose.model("ALUMNI", userSchema);

module.exports = AlumniUser;


// if (this.isModified("password")) {    }