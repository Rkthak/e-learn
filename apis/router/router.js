const express = require('express');
const  {course, singleCourse} = require("../controller/controller");


const Route = express.Router();

Route.route("/course").get(course);

Route.route("/course/:cardName").get(singleCourse);

module.exports = Route;