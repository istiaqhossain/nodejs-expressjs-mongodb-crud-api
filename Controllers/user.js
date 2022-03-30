const UserSchema = require("../Models/user");

const getAllUsers = async (req, res) => {
    try {
        const users = await UserSchema.find({});
        res.status(200).json({users});
    } catch (error) {
        res.status(500).json({message: error});
    }
}

const createUser = async (req, res) => {
    try {
        const user = await UserSchema.create(req.body);
        res.status(201).json({user});    
    } catch (error) {
        res.status(500).json({message: error});
    }
}

const getUser = async (req, res) => {
    try {
        const {userID} = req.params;
        const user = await UserSchema.findOne({_id:userID});

        if (!user) {
            return res.status(404).json({message: 'User does not exist!!!'});
        }

        res.status(200).json({user});
    } catch (error) {
        res.status(500).json({message: error});
    }
}

const updateUser = async (req, res) => {
    try {
        const {userID} = req.params;
        const user = await UserSchema.findByIdAndUpdate({_id:userID}, req.body, {
            new: true,
            runValidators: true
        });

        if (!user) {
            return res.status(404).json({message: 'User does not exist!!!'});
        }

        res.status(200).json({user});
    } catch (error) {
        res.status(500).json({message: error});
    }
}

const deleteUser = async (req, res) => {
    try {
        const {userID} = req.params;
        const user = await UserSchema.findByIdAndDelete({_id:userID});

        if (!user) {
            return res.status(404).json({message: 'User does not exist!!!'});
        }

        res.status(200).json({user});
    } catch (error) {
        res.status(500).json({message: error});
    }
}

module.exports = {getAllUsers, createUser, getUser, updateUser, deleteUser};