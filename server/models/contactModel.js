const mongoose = require("mongoose");

const ContactSchema = new mongoose.Schema({
    username : {
        type : String,
        require : true
    },
    email : {
        type : String,
        require : true
    },
    message : {
        type : String,
        require : true
    }
});

const contact = new mongoose.model("Contact",ContactSchema);

module.exports = contact;