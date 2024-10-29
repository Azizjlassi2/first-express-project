const User = require("../models/userModel")

exports.createUSer = async (req,res) => {
    try {
        
        const newUser = await User.create(req.body);
        console.log(req.body)
        res.status(201).json({
            status:"success",
            data: {newUser}
        });
    } catch (error) {
        res.status(401).json({
            status:"failure",
            message:error,
        });
        
    }
}

exports.getAllUsers = async (req,res) => {
    try {
        
        const users = await User.find();
        
        res.status(200).json({
            status:"success",
            results:users.length,
            data: {users}
        });
    } catch (error) {
        res.status(401).json({
            status:"failure",
            message:error,
        });
        
    }
}

exports.getUserById = async (req,res) => {
    try {
        
        const user = await User.findById(req.params.id);
        
        res.status(200).json({
            status:"success",
            
            data: {user}
        });
    } catch (error) {
        res.status(401).json({
            status:"failure",
            message:error,
        });
        
    }
}


exports.deleteUserById = async (req,res) => {
    try {
        
        const user = await User.findByIdAndDelete(req.params.id);
        
        res.status(200).json({
            status:"success",
            
            data: {user}
        });
    } catch (error) {
        res.status(401).json({
            status:"failure",
            message:error,
        });
        
    }
}

exports.putUserById = async (req,res) => {}



