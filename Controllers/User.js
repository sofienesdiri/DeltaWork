const bcrypt = require ('bcrypt')
var jwt = require('jsonwebtoken')
const User = require("../Models/User")
// image:req.file.filename
exports.SignUp =async(req,res)=>{
    try {
        const{nom,prenom,email,password,pays,role}=req.body
        const found = await User.findOne({email})
        if (found){return res.status(400).send({errors:[{msg:'email deja utilisé'}]})}
        const newUser = new User (req.body)        
        const saltRounds = 10;
        const salt = bcrypt.genSaltSync(saltRounds)
        const hashPassword = bcrypt.hashSync(password, salt)
        newUser.password=hashPassword
        const payload = {id:newUser._id}
        var token = jwt.sign(payload,process.env.privatekey)
        newUser.save()
        res.status(200).send({msg:'compte cree',newUser,token})  
    } catch (error) {
    res.status(500).send({errors:[{msg:'creaction de compte impossible'}]})   
    
    }

}

exports.SignIn = async(req,res)=>{
    try {
        const{email,password}=req.body  
        const found = await User.findOne({email})
        if (!found){return res.status(400).send({errors:[{msg:'email innexistant'}]})}
        const match = await bcrypt.compare(password,found.password)
        if (!match){return res.status(400).send({errors:[{msg:'mot de passe erroné'}]})}
        const payload = {id:found._id}
        var token =jwt.sign(payload,process.env.privateKey,{expiresIn: '24h'})

        res.status(200).send({msg:'connection approuvé',found,token})
    } catch (error) {
    res.status(500).send({errors:[{msg: 'connexion impossible'}]}) 
    }
}
exports.DeleteUser=async(req,res)=>{
    try {
        const {id} = req.params
        const DeleteUser = await User.findByIdAndDelete(id)
        res.status(200).send('Utilisateur supprimé')
    } catch (error) {
        res.status(500).send({errors:[{msg:'Impossible de supprimer compte'}]})
    }
}
exports.UpdateUser=async(req,res)=>{
    try {
        const {id} = req.params
        if (req.file) {
            const UpdateUser = await User.findByIdAndUpdate(id,{$set:{...req.body,image: req.file.path}})  
        } else {
           const UpdateUser = await User.findByIdAndUpdate (id,{$set:{...req.body}}) 
        }
        
        res.status(200).send('Utilisateur modifié')
    } catch (error) {
        res.status(500).send({errors:[{msg:'impossible de modifier compte'}]})
    }
}
exports.GetUser=async(req,res)=>{
    try {
        const Users = await User.find()
        res.status(200).send({msg:'liste des User',Users})
    } catch (error) {
        res.status(500).send({errors:[{msg:'impossible obtenir les User'}]})
    }
}
exports.GetOneUser=async(req,res)=>{
    try {
        const {id} = req.params
        const OneUser = await User.findById(id)
        res.status(200).send({OneUser})
    } catch (error) {
        res.status(500).send({errors:[{msg:'impossible dobtenir ce profile'}]})
        
    }
}
/**************************************EDIT PASSWORD************************************************************* */
exports.EditPassword = async(req,res)=>{
    try {
        const{id,newPassword,oldpassword}=req.body  
        const found = await User.findById(id)
        if (!found){return res.status(400).send({errors:[{msg:'user introuvable'}]})}
        const match = await bcrypt.compare(oldpassword,found.password)
        if (!match){return res.status(400).send({errors:[{msg:'mot de passe erroné'}]})}
        const saltRounds = 10;
        const salt = bcrypt.genSaltSync(saltRounds)
        const hashPassword = bcrypt.hashSync(newPassword, salt)
    const UpdateUser = await User.findByIdAndUpdate(id,{$set:{password:hashPassword}})
    res.status(200).send({msg:'mot de passe modifié'})

    } catch (error) {
    res.status(500).send({errors:[{msg: 'modification impossible'}]}) 
    }
}
