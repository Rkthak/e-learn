const User = require("../models/mongoDbModel");
const bcrypt = require("bcrypt");

const home = (req,res) => {
    res.send("hello ji");
}

const register = async (req,res,next) =>{
    try {
        const { username, email, phone, password } = req.body;
       const userExist = await User.findOne({email});

       if(userExist) {
         return res.status(401).json({message : "email already registed 😥"});
       }


       const userCreated = await User.create({
        username,
        email,
        phone,
        password
       });

    const userToken = await userCreated.generateToken();
    
       res.status(201).json({
        message : "registration successful",
        jwt : userToken,
        userID : userCreated._id.toString()
       })
    } catch (error) {
        next(error)
    }

}

const updatepass = async (req, res,next) =>{
    try {
        const {email, password} = req.body;

        const user = await User.findOne({email});

        if (!user) {
            res.status(401).json({message : "user not found"});
        }        
        
        const salt =await bcrypt.genSalt(10);
        const hash_pass = await bcrypt.hash(password,salt);

        const updated_pass = await User.updateOne({email},{$set : {password : hash_pass}});


        if (updated_pass) {
            
        res.status(200).json({
            message : "password updated",
            jwt : await user.generateToken(),
            userID : user._id.toString(),
        })
        }

    } catch (error) {
        next(error);
        
    }
}

const login = async (req, res,next) =>{
    
    try {
        const {email, password } = req.body;
        const user = await User.findOne({email});
        
        if(!user){
            res.status(401).json({message : "user not found 🙄"});
        }

        const pass = await user.compare_pass(password)
        
        if (pass) {
            const userToken = await user.generateToken();
            res.status(200).json({
                message : "login successful 💕",
                jwt : userToken,
                userID : user._id.toString()
            });
        }else{
            res.status(401).json({message : "invalid credentials"})
        }

    } catch (error) {
        next(error)
    }

}

const user = async (req,res) =>{
    try {
        const userData = req.user;
        
        res.status(200).json({userData})
        
    } catch (error) {
        console.error("user getting", error);
    }
}

module.exports = {home, register, login, updatepass, user};