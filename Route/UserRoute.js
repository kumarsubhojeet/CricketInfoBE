const express = require("express");
const { userRegisterCtrl, fetchAllPlayers, deletePlayer, fetchSinglePlayer, updatePlayer } = require('../Controler/UserCtrl')

const userRoutes = express.Router();

userRoutes.post("/players", userRegisterCtrl);
userRoutes.get("/", fetchAllPlayers);
userRoutes.delete("/:id", deletePlayer);
userRoutes.get("/:id", fetchSinglePlayer);
userRoutes.put("/:id", updatePlayer);

module.exports = userRoutes;

