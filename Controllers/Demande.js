const Demande = require("../Models/Demande")

exports.AddDemande = async(req,res)=>{
    try {
        const {id}= req.params
        const newDemande = new Demande({...req.body,status:"En attente",FreelancerId:req.user._id, AnnonceId :id})
        console.log(newDemande)
        // const NewDemande = new Demande({...req.body,FreelancerId:req.user._id})
        await newDemande.save()
        res.status(200).send({newDemande,Msg:'new Demandes'})
    } catch (error) {
        res.status(500).send({errors:[{msg:'Demande impossible a envoyer'}]})     
    }
}


exports.GetDemande = async(req,res) => {
try {

const Demandes = await Demande.find().populate("AnnonceId").populate("FreelancerId") 
res.status(200).send({Demandes,Msg:'Liste des Demandes'})
} catch (error) {
    res.status(500).send({errors:[{msg:'Demandes impossible a trouver'}]})   
}
}


exports.DeleteDemande = async(req,res) => {
    try {
const {id}=req.params  
const delDemande = await Demande.findByIdAndDelete(id)
res.status(200).send('Demande effacée')
    } catch (error) {
        res.status(500).send({errors:[{msg:'Demande impossible a supprimer'}]})   
    }
    }


exports.UpdateDemande=async(req,res)=>{
    try {
        const {id} = req.params
        const upDemande = await Demande.findByIdAndUpdate(id,{$set:{status:'Acceptée'}})
        res.status(200).send('Demande Accepté')
    } catch (error) {
        res.status(500).send({errors:[{msg:'Demande impossible a accepter'}]})  
    }
}