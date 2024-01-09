const mongoose = require("mongoose");

var mongoDBURL = 'mongodb+srv://patelsamrat444:samrat@cluster0.ty3oshu.mongodb.net/shreyrooms'

mongoose.connect(mongoDBURL , {useUnifiedTopology:true , useNewUrlParser:true})

var dbconnect = mongoose.connection

dbconnect.on('error' , ()=>{
    console.log(`Mongo DB Connection Failed`);
})

dbconnect.on('connected' , ()=>{
    console.log(`Mongo DB Connection Successfull`);
})

module.exports = mongoose