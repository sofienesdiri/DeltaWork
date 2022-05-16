const  mongoose = require("mongoose")
const UserSchema = new mongoose.Schema({
    nom : {type : String,required:true},
    prenom : {type : String,required:true},
    email :{type : String,required:true,unique:true},
    password :{type : String,required:true},
    pays :{type : String,required:true},
    image : {type:String},
    role :{type : String},
    numero:{type : Number},
    domaine:{type : String},
    niveau:{type : String},
    description:{type : String},
    technologie: String
    
})

module.exports = mongoose.model('User',UserSchema)