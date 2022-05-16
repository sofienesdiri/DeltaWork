const  mongoose = require("mongoose")
const AnnonceSchema = new mongoose.Schema({
    titre : {type : String,required:true},
    description : {type : String,required:true},
    technologie : {type : String,required:true},
    budget :{type : Number ,required:true},
    niveau:{type :String,required:true},
    domaine:{type:String,reqired:true},
    client : {type: mongoose.Schema.Types.ObjectId, ref:"User"},
    dateAnnonce :{ type: Date},
    duree : {type : Number}
    // dateFin:{type : Date},

    
})

module.exports = mongoose.model('Annonce',AnnonceSchema)