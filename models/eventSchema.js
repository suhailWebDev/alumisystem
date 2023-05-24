const mongoose = require("mongoose");


const eventSchema = new mongoose.Schema({
    eventname:{
        type:String,
        required:true
    },
    eventdate:{
        type:Date,
        required:true
    },
    eventdescription:{
        type:String,
        required:true
    }
});




// createing model
const Events = new mongoose.model("EVENTS", eventSchema);

module.exports = Events;

