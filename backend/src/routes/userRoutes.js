const express = require("express")
const router = express.Router()

const{
    criarUsuarios
} = require("../controller/userController.js")


router.post("/register", criarUsuarios)

module.exports = router