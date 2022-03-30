const express = require("express");
const router = express.Router();

const {getAllUsers, createUser, getUser, updateUser, deleteUser} = require("../Controllers/user");

router.route("/").get(getAllUsers).post(createUser);
router.route("/:userID").get(getUser).put(updateUser).delete(deleteUser);

module.exports = router;