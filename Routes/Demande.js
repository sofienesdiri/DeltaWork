const express = require('express')
const DemandeRouter = express.Router()
const { isAuth } = require("../Middlewares/isAuth")
const {AddDemande,DeleteDemande, GetDemande, UpdateDemande} = require("../Controllers/Demande")

DemandeRouter.post('/AddDemande/:id',isAuth,AddDemande)
DemandeRouter.delete('/DeleteDemande/:id',DeleteDemande)
DemandeRouter.get('/GetDemande',GetDemande)
DemandeRouter.put('/EditDemande/:id',UpdateDemande)




module.exports = DemandeRouter