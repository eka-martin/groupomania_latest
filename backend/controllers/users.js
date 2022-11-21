const bcrypt = require("bcrypt");
const User = require("../models/user");
const jwt = require("jsonwebtoken");
const express = require("express");
const router = express.Router();
const UserModel = require("../models/user");

exports.login = (req, res, next) => {
  User.findOne({ email: req.body.email }).then((user) => {
    if (user === null) {
      res
        .status(401)
        .json({ message: "paire identifiant/mot de passe incorrecte" });
    } else {
      bcrypt
        .compare(req.body.password, user.password)
        .then((valid) => {
          if (!valid) {
            console.log(user);
            res.status(401).json({
              message: "Paire identifiant/mot de passe incorrecte",
            });
          } else {
            res.status(200).json({
              userId: user._id,
              token: jwt.sign(
                { userId: user._id, admin: user.admin },
                process.env.SECRET_TOKEN,
                {
                  expiresIn: "24h",
                }
              ),
            });
          }
        })
        .catch((error) => {
          res.status(500).json({ error });
        });
    }
  });
};

exports.signup = (req, res, next) => {
  bcrypt
    .hash(req.body.password, 10)
    .then((hash) => {
      const user = new User({
        email: req.body.email,
        password: hash,
        admin: false,
      });
      user
        .save()
        .then(() => res.status(201).json({ message: "Utilisateur créé !" }))
        .catch((error) => res.status(400).json({ error }));
    })
    .catch((error) => res.status(500).json({ error }));
};

exports.delete = (req, res, next) => {
  console.log(req.auth.userId);
  User.findByIdAndRemove(req.auth.userId)
    .exec()
    .then((doc) => {
      console.log(doc);
      if (!doc) {
        return res.status(404).end();
      }
      return res.status(204).end();
    })
    .catch((err) => next(err));
};
// Get ONE
exports.getOneUser = (req, res, next) => {
  UserModel.findOne({ _id: req.params.id })
    .then((user) => res.status(200).json(user))
    .catch((error) => res.status(404).json({ error }));
};
// Get ALL
exports.getAllUsers = (req, res, next) => {
  UserModel.find()
    .then((users) => res.status(200).json(users))
    .catch((error) => res.status(400).json({ error }));
};
