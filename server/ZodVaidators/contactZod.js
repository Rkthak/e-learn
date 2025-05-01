const {z} = require("zod");

const contactvalidator = z.object({
    username: z
    .string({ required_error: "username can't be empty" })
    .trim()
    .min(3, { message: "username must contain 3 characters" })
    .max(200, "username can't exceed 200 charactes"),
    email: z
    .string({ required_error: "email is required" })
    .trim()
    .email({ message: "invailid email address" })
    .min(3, { message: "email must contain 3 characters" })
    .max(200, { message: "email can't be greater than 200 characters" }),
    message : z.string({required_error : "please write a message"}).trim().min(20,{message : "please enter atlest 20 words in message field"}).max(255, {message : "message can't exeed 255 words"})
})

module.exports = contactvalidator;