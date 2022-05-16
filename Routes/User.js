const express = require("express")
const { SignIn, SignUp, uploadImage, DeleteUser, UpdateUser, GetUser, GetOneUser,EditPassword, CompleteUser } = require("../Controllers/User")
const {isAuth} = require('../Middlewares/isAuth')
const {registerValidation,validation, logValidation} = require ('../Middlewares/RegisterValidatore')
const { Upload } = require("../Middlewares/Upload")

const UserRouter = express.Router()
UserRouter.post('/SignUp',registerValidation,validation,SignUp)
UserRouter.post('/SignIn',logValidation,validation,SignIn)
UserRouter.get('/GetUser',isAuth,(req,res)=>res.send(req.user))
UserRouter.delete('/DeleteUser/:id',DeleteUser)
UserRouter.put('/EditUser/:id',Upload.single('image'),UpdateUser)
UserRouter.get('/GetListUser',GetUser)
UserRouter.get('/GetOneUser/:id',GetOneUser)
UserRouter.put('/EditPassword/:id',EditPassword)




module.exports = UserRouter