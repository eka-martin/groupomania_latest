const express = require("express");
const router = express.Router();
const login = require("../controllers/users");
const signup = require("../controllers/users");
const deleteUser = require("../controllers/users");
const auth = require("../middlewares/auth");
const getOneUser = require("../controllers/users");
const getAllUsers = require("../controllers/users");

module.exports = () => {
  console.log("test de l'export user passé");
  router.use("/auth/login", login.login);
  router.use("/auth/signup", signup.signup);
  router.use("/auth/delete", auth, deleteUser.delete);
  router.use("/auth/:id", auth, getOneUser.getOneUser);
  router.use("/auth", auth, getAllUsers.getAllUsers);
  return router;
};
