const { z } = require("zod");

const Login_validator = z.object({
  email: z
    .string({ required_error: "email is required" })
    .trim()
    .email({ message: "invailid email address" })
    .min(3, { message: "email must contain 3 characters" })
    .max(200, { message: "email can't be greater than 200 characters" }),
  password: z
    .string({ required_error: "password is required" })
    .trim()
    .min(8, { message: "pasword can't be less than 8 characters" })
    .max(20, { message: "password can't be greater than 20 characters" }),
});

const register_validator = Login_validator.extend({
  username: z
    .string({ required_error: "username can't be empty" })
    .trim()
    .min(3, { message: "username must contain 3 characters" })
    .max(200, "username can't exceed 200 charactes"),
  phone: z
    .string({ required_error: "phone number is require" })
    .trim()
    .min(10, { message: "phone must contain 10 digits" })
    .max(12, { message: "phone number cant'greater than 10 digits" }),
});

const updated_pass = Login_validator.extend({})

module.exports = { Login_validator, register_validator, updated_pass };
