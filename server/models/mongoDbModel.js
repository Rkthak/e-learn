const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  phone: {
    type: Number,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
});

UserSchema.pre("save", async function (next) {
    const user = this;
    
        if (!user.isModified("password")) {
            next()
        }
  try {
    
    const salt = await bcrypt.genSalt(10);
    const hash_password =await bcrypt.hash(user.password,salt);
    user.password = hash_password;
  } catch (error) {
    // console.log("bcrypt error");
    next(error)
  }
});

UserSchema.methods.compare_pass = async function (password) {
    return bcrypt.compare(password,this.password);
}

UserSchema.methods.generateToken = async function () {  
    try {
     return   jwt.sign({
            userID : this._id.toString(),
            email : this.email
        },
        process.env.JSON_SECRETE_KEY,
      {
        expiresIn : "30d"
      }
    )
    } catch (error) {
        // console.log("json error");
        next(error);
    }
}

const User = new mongoose.model("User", UserSchema);

module.exports = User;
