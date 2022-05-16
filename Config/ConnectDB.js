const mongoose  = require("mongoose")

const ConnectDB = async()=>{
    try {
    await mongoose.connect(process.env.MONGO_URI) 
    console.log('connexion etablie avec la DB ')   
    } catch (error) {
    console.log('impossible de se connecter a la DB')  
    }
}

module.exports = ConnectDB