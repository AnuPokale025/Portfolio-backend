const mongoose = require('mongoose');
const dataschema= new mongoose.Schema({
    name:String,
    email:String,
    subject: String,
    message: String
})

module.exports=mongoose.model('aniket',dataschema);