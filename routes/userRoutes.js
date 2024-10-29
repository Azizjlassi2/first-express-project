const userController = require("../controllers/userController")
const express = require('express')
const router = express.Router()


router
    .route("/")
    .post(userController.createUSer)
    .get(userController.getAllUsers)


router
    .route("/:id")
    .get(userController.getUserById)
    .delete(userController.deleteUserById)

module.exports = router;