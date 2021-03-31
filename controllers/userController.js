
const User = require('../models/user')





exports.signUp = (req, res) => {
    const user = new User(req.body)
    user.save((err, user) => {
        if(!err){
            return res.status(400).send("bad request ...")
        } 
        res.send({
            msg : "enregitrer" ,
            user : user
        })
    })
}