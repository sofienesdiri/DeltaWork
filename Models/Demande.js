const mongoose = require("mongoose")
const DemandeSchema = new mongoose.Schema( {
AnnonceId : {type: mongoose.Schema.Types.ObjectId, ref:"Annonce"},
FreelancerId : {type: mongoose.Schema.Types.ObjectId, ref:"User"},
status : {type : String }

})

module.exports = mongoose.model ('Demande',DemandeSchema)