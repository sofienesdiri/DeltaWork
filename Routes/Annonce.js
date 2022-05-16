const express = require("express")
const { GetAnnonce, AddAnnonce,GetOneAnnonce, DeleteAnnonce, UpdateAnnonce, GetMyAnnonce} = require("../Controllers/Annonce")
const { isAuth } = require("../Middlewares/isAuth")



const AnnonceRouter = express.Router()
AnnonceRouter.post('/AddAnnonce',isAuth,AddAnnonce)
AnnonceRouter.get('/GetAnnonce',GetAnnonce)
AnnonceRouter.get('/GetMyAnnonce',isAuth,GetMyAnnonce)
AnnonceRouter.get('/GetOneAnnonce/:id',GetOneAnnonce)
AnnonceRouter.delete('/DeleteAnnonce/:id',DeleteAnnonce)
AnnonceRouter.put('/UpdateAnnonce/:id',UpdateAnnonce)





module.exports = AnnonceRouter