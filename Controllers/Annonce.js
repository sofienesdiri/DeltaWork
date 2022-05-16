const Annonce = require("../Models/Annonce")

exports.AddAnnonce = async(req,res)=>{
    try {
    const NewAnnonce = new Annonce({...req.body,client:req.user._id,dateAnnonce: Date.now() })   
    await NewAnnonce.save()
    res.status(200).send({NewAnnonce,Msq:'Annonce Added'})
    } catch (error) {
    res.status(500).send("Annonce not added")   
    }
    }

exports.GetAnnonce = async(req,res)=>{
        try {
        const AllAnnonce = await Annonce.find().populate("client")
        res.status(200).send({AllAnnonce,Msg:'Liste des Annonces'})
        } catch (error) {
        res.status(500).send("impossible de voir les Annonces ")   
        }
        } 

exports.DeleteAnnonce=async(req,res)=>{
            try {
            const {id}= req.params 
            const DelAnnonce = await Annonce.findByIdAndDelete(id)
            res.status(200).send('Annonce effacée')
            } catch (error) {
            console.log('delete impossible' )  
            }
        }

exports.GetOneAnnonce=async(req,res)=>{
            try {
                const {id}= req.params
                const OneAnnonce = await Annonce.findById(id)
                res.status(200).send({OneAnnonce,msg:'annonce trouvé'})
            } catch (error) {
                console.log('annonce impossible a trouver')
                
            }
        }

exports.GetMyAnnonce=async(req,res)=>{
    try {
        const myAnnonce= await Annonce.find({client:req.user._id}).populate("client")
        res.status(200).send({myAnnonce,Msg:'Mes Annonces'})
    } catch (error) {
        console.log("impossible de trouver mes annonces")
    }
}

exports.UpdateAnnonce=async(req,res)=>{
            try {
            const {id}= req.params 
            const UpAnnonce = await Annonce.findByIdAndUpdate(id,{$set:req.body})
            res.status(200).send({msg:'Annonce updated',UpAnnonce})
            } catch (error) {
            console.log('update impossible' )  
            }
        }