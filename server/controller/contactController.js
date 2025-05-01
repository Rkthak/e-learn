const Contact = require("../models/contactModel");

const contact = async (req,res) =>{
    const {username, email, message} = req.body;

    try {
         await Contact.create({
            username,
            email,
            message
        });

        res.status(200).json({
            message : "message delivered"
        })
    } catch (error) {
        next()
        
    }
}

module.exports = contact;