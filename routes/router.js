const express = require("express");
const router = new express.Router();
const AlumniUser = require("../models/userSchema");
var bcrypt = require("bcrypt");
const jwt=require('jsonwebtoken');
const auth=require('../middleware/auth');
const StaffUser = require("../models/staffSchema");
const Admin = require("../models/adminSchema");
const authstaff=require('../middleware/authstaff');
const authadmin = require("../middleware/authadmin");
const Events = require("../models/eventSchema");



// for user registration

router.post('/register', async (req, res) => {
    const { name, profilePhoto, birth, email, contact, passyear, course, occupation, address, password, confirmpassword } = req.body;
    if (!name || !profilePhoto || !birth || !email || !contact || !passyear || !course || !occupation || !address || !password || !confirmpassword) {
        return res.status(422).json({ error: 'Please fill all the fields properly' })
    }

    try {
        const userExist = await AlumniUser.findOne({ email: email });

        if (userExist) {
            return res.status(422).json({ error: 'Email already exist' })
        } else if (password !== confirmpassword) {
            return res.status().json({ error: 'password are not matching' })
        }

        const user = new AlumniUser({ name, profilePhoto, birth, email, contact, passyear, course, occupation, address, password, confirmpassword })
        const userRegister = await user.save();
        console.log(`${user} user register successfully`);
        console.log(userRegister);
        if (userRegister) {
            res.status(201).json({ message: 'user registered successfully' })
        } else {
            res.status(501).json({ message: 'Failed to register' })
        }
    } catch (err) {
        console.log(err);
    }
})

router.post('/staffregister', async (req, res) => {
    const { name, profilePhoto, birth,join, email, contact, password, confirmpassword } = req.body;
    if (!name || !profilePhoto || !birth || !join || !email || !contact || !password || !confirmpassword) {
        return res.status(422).json({ error: 'Please fill all the fields properly' })
    }

    try {
        const userExist = await StaffUser.findOne({ email: email });

        if (userExist) {
            return res.status(422).json({ error: 'Email already exist' })
        } else if (password !== confirmpassword) {
            return res.status().json({ error: 'password are not matching' })
        }

        const user = new StaffUser({ name, profilePhoto, birth,join, email, contact, password, confirmpassword })
        const userRegister = await user.save();
        console.log(`${user} user register successfully`);
        console.log(userRegister);
        if (userRegister) {
            res.status(201).json({ message: 'user registered successfully' })
        } else {
            res.status(501).json({ message: 'Failed to register' })
        }
    } catch (err) {
        console.log(err);
    }
})



// user Login

router.post('/login', async (req, res) => {
    try {
        let token;
        const { email, password } = req.body;
        console.log(req.body);
        if (!email || !password) {
            return res.status(400).json({ error: 'Invalid Data' });
        }

        const userLogin = await AlumniUser.findOne({ email: email });
        // console.log(userLogin);
        if(userLogin){
        const isMatch=await bcrypt.compare(password, userLogin.password);
        token=await userLogin.generateAuthtoken();
        res.cookie('usercookie',token,{
            expires:new Date(Date.now()+25892000000000),
            httpOnly:true
        });
        const result = {
            userLogin,
            token
        }
        res.status(201).json({status:201,result});
        if(!isMatch){
            return res.status(400).json({ error: 'Invalid Data' });
        }else{
            return res.json({message:'User Sign in successfully'});
        }
    }
    }catch(err){
        console.log(err);
    }
})


router.post('/stafflogin', async (req, res) => {
    try {
        let token;
        const { email, password } = req.body;
        console.log(req.body);
        if (!email || !password) {
             res.status(400).json({ error: 'Invalid Data' });
        }

        const userLogin = await StaffUser.findOne({ email: email });
        if(userLogin){
        const isMatch=await bcrypt.compare(password, userLogin.password);
        token=await userLogin.generateAuthtoken();
        res.cookie('staffcookie',token,{
            expires:new Date(Date.now()+25892000000000),
            httpOnly:true
        });
        const result = {
            userLogin,
            token
        }
        res.status(201).json({status:201,result}) && res.json({message:'User Sign in successfully'});
        if(!isMatch){
            return res.status(400).json({ error: 'Invalid Data' });
        }
    }
    }catch(err){
        console.log(err);
    }
})



// user valid
router.get("/validuser",auth,async(req,res)=>{
    try {
        const ValidUserOne = await AlumniUser.findOne({_id:req.userId});
        res.status(201).json({status:201,ValidUserOne});
    } catch (error) {
        res.status(401).json({status:401,error});
    }
});

router.get("/validstaff",authstaff,async(req,res)=>{
    try {
        const ValidUserOne = await StaffUser.findOne({_id:req.userId});
        res.status(201).json({status:201,ValidUserOne});
    } catch (error) {
        res.status(401).json({status:401,error});
    }
});


// user logout

router.get("/logout",auth,async(req,res)=>{
    try {
        req.rootUser.tokens =  req.rootUser.tokens.filter((curelem)=>{
            return curelem.token !== req.token
        });

        res.clearCookie("usercookie",{path:"/"});

        req.rootUser.save();

        res.status(201).json({status:201})

    } catch (error) {
        res.status(401).json({status:401,error})
    }
})

router.get("/logoutstaff",authstaff,async(req,res)=>{
    try {
        req.rootUser.tokens =  req.rootUser.tokens.filter((curelem)=>{
            return curelem.token !== req.token
        });

        res.clearCookie("staffcookie",{path:"/"});

        req.rootUser.save();

        res.status(201).json({status:201})

    } catch (error) {
        res.status(401).json({status:401,error})
    }
})

router.post('/adminregister', async (req, res) => {
    const { name, email, contact, password, confirmpassword } = req.body;
    if (!name || !email || !contact || !password || !confirmpassword) {
        return res.status(422).json({ error: 'Please fill all the fields properly' })
    }

    try {
        const adminExist = await Admin.findOne({ email: email });

        if (adminExist) {
            return res.status(422).json({ error: 'Email already exist' })
        } else if (password !== confirmpassword) {
            return res.status().json({ error: 'password are not matching' })
        }

        const admin = new Admin({ name, email, contact, password, confirmpassword })
        const adminRegister = await admin.save();
        console.log(`${admin} user register successfully`);
        console.log(adminRegister);
        if (adminRegister) {
            res.status(201).json({ message: 'user registered successfully' })
        } else {
            res.status(501).json({ message: 'Failed to register' })
        }
    } catch (err) {
        console.log(err);
    }
});

router.post('/adminlogin', async (req, res) => {
    try {
        let token;
        const { email, password } = req.body;
        console.log(req.body);
        if (!email || !password) {
            return res.status(400).json({ error: 'Invalid Data' });
        }

        const adminLogin = await Admin.findOne({ email: email });
        // console.log(userLogin);
        if(adminLogin){
        const isMatch=await bcrypt.compare(password, adminLogin.password);
        token=await adminLogin.generateAuthtoken();
        console.log(token);
        res.cookie('admincookie',token,{
            expires:new Date(Date.now()+25892000000000),
            httpOnly:true
        });
        const result = {
            adminLogin,
            token
        }
        res.status(201).json({status:201,result}) && res.json({message:'User Sign in successfully'});
        if(!isMatch){
            return res.status(400).json({ error: 'Invalid Data' });
        }
    }
    }catch(err){
        console.log(err);
    }
})

router.get("/adminlogout",authadmin,async(req,res)=>{
    try {
        req.rootUser.tokens =  req.rootUser.tokens.filter((curelem)=>{
            return curelem.token !== req.token
        });

        res.clearCookie("admincookie",{path:"/"});

        req.rootUser.save();

        res.status(201).json({status:201})

    } catch (error) {
        res.status(401).json({status:401,error})
    }
})

router.post('/addevent', async (req, res) => {
    const { eventname,eventdate,eventdescription  } = req.body;
    if (!eventname || !eventdate|| !eventdescription) {
        return res.status(422).json({ error: 'Please fill all the fields properly' })
    }

    try {
        const eventExist = await Events.findOne({ eventname: eventname });

        if (eventExist) {
            return res.status(422).json({ error: 'Event already exist' })
        } 

        const event = new Events({ eventname,eventdate,eventdescription})
        const eventRegister = await event.save();
        console.log(`${event} event added successfully`);
        console.log(eventRegister);
        if (eventRegister) {
            res.status(201).json({ message: 'event added successfully' })
        } else {
            res.status(501).json({ message: 'Failed to add' })
        }
    } catch (err) {
        console.log(err);
    }
})

router.get("/events",async(req,res)=>{
    const { eventname,eventdate,eventdescription  } = req.body;
    try{
    const eventData=await Events.find();
    res.send(eventData);
    console.log(eventData);
    }catch(err){
        res.send(err);
    }
});

module.exports = router;



// 2 way connection
// 12345 ---> e#@$hagsjd
// e#@$hagsjd -->  12345

// hashing compare
// 1 way connection
// 1234 ->> e#@$hagsjd
// 1234->> (e#@$hagsjd,e#@$hagsjd)=> true



