const { body, validationResult } = require("express-validator");

exports.registerValidation = [
    body('email','veuillez entrer un email valid').isEmail(),
    body ('password','veuillez entrer un mots de passe de minimum 6 caracteres').isLength({min : 6})
]
exports.logValidation = [
    body('email','veuillez entrer un email valid').isEmail()
     // body('password','veuillez entrer mot de passe valid').isEmpty(),
    
]

exports.validation=(req,res,next)=>{
    const errors = validationResult(req); 
    if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
}
next()
}
