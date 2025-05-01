const express = require("express");
const {  home,  register,  login,  updatepass, user} = require("../controller/authcontroller");
const {  Login_validator,  register_validator, updated_pass,} = require("../ZodVaidators/authValidator");
const contactvalidator = require("../ZodVaidators/contactZod");
const validate = require("../middleWares/validate");
const authMiddleware = require("../middleWares/authMiddleware");
const contact = require("../controller/contactController")

const Router = express.Router();

Router.route("/").get(home);
Router.route("/register").post(validate(register_validator), register);
Router.route("/login").post(validate(Login_validator), login);
Router.route("/updatepass").post(validate(updated_pass),updatepass);

Router.route("/contact").post(validate(contactvalidator),contact);

Router.route("/user").get(authMiddleware ,user)

module.exports = Router;
