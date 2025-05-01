const jwt = require("jsonwebtoken");
const User = require("../models/mongoDbModel");

const authMiddleware = async (req, res, next) =>{

    const token = req.header("Authorization");

    if (!token) {
        res.status(401).json({message : "invalid authorization, token not provided"})
    }

   const jwtToken = token.replace("bearer ", "").trim()
    

    try {
     const  isVarified = jwt.verify(jwtToken,process.env.JSON_SECRETE_KEY);
     
     const userData = await User.findOne({email : isVarified.email}).select({password : 0})

       req.user = userData;
       req.token = token;
       req.userID = userData._id;
        
        next();
    } catch (error) {
        res.status(401).json({message : "invalid authorization, token not provided"});
    }
}

module.exports = authMiddleware;