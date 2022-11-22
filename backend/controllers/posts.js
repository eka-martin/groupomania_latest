const express = require("express");
const router = express.Router();
const Post = require("../models/post");
const fs = require("fs");

exports.create = (req, res, next) => {
  //console.log(req.body);
  const postObject = req.body;
  //console.log(req.auth);
  delete postObject._id;
  const post = new Post({
    ...postObject,
    userId: req.auth.userId,
    imageUrl: `${req.protocol}://${req.get("host")}/assets/images/${
      req.file.filename
    }`,
    likes: 0,
    dislikes: 0,
    usersLiked: [" "],
    usersDisliked: [" "],
  });
  post
    .save()
    .then(() => {
      res.status(201).json({ message: "Objet enregistré !" });
    })
    .catch((error) => {
      res.status(400).json({ error });
    });
};

exports.delete = (req, res, next) => {
  //console.log(req.auth.admin, "admin");
  Post.findOne({ _id: req.params.id })
    .then((post) => {
      if (post.userId != req.auth.userId && req.auth.admin == false) {
        res.status(401).json({ message: "Not authorized" });
      } else {
        const filename = post.imageUrl.split("assets/images/")[1];
        fs.unlink(`assets/images/${filename}`, () => {
          Post.deleteOne({ _id: req.params.id })
            .then(() => res.status(200).json({ message: "Post supprimé" }))
            .catch((error) => res.status(400).json({ error }));
          //console.log("Post supprimé");
        });
      }
    })
    .catch((error) => res.status(500).json({ error }));
};

exports.displayOne = (req, res, next) => {
  //console.log("test getOnePost");
  Post.findOne({
    _id: req.params.id,
  })
    .then((post) => {
      res.status(200).json(post);
    })
    .catch((error) => {
      res.status(404).json({
        error: error,
      });
    });
};

exports.modify = (req, res, next) => {
  const postObject = req.file
    ? {
        ...req.body,
        imageUrl: `${req.protocol}://${req.get("host")}/../../assets/images/${
          req.file.filename
        }`,
      }
    : { ...req.body };

  delete postObject._userId;
  Post.findOne({ _id: req.params.id })
    .then((post) => {
      if (post.userId != req.auth.userId && req.auth.admin == false) {
        res.status(401).json({ message: "Not authorized" });
      } else {
        Post.updateOne(
          { _id: req.params.id },
          { ...postObject, _id: req.params.id }
        )
          .then(() => res.status(200).json({ message: "Post modifié!" }))
          .catch((error) => res.status(401).json({ error }));
      }
    })
    .catch((error) => {
      res.status(400).json({ error });
    });
};

exports.displayAll = (req, res, next) => {
  //console.log("Affichage de tous les posts");
  
  Post.find().sort({createdAt: -1})
    .then((posts) => {
      //console.log(posts[0]);
      res.status(200).json(posts);
    })
    .catch((error) => {
      res.status(400).json({
        error: error,
      });
    });
};

exports.like = (req, res, next) => {
  Post.findOne({ _id: req.params.id })
  .then((post) => {
    if(post.usersLiked.includes(req.auth.userId)) {
      Post.updateOne(
        {_id: req.params.id},
        {$pull : {usersLiked: req.auth.userId }, $inc: {likes: -1}}
      ).then(() => 
        res.status(200).json({message: "Ce post ne vous intéresse plus !", likeActive: false,})
      ).catch((error) => res.status(400).json({error}));
    } else {
      Post.updateOne(
        {_id: req.params.id},
        {$push: {usersLiked: req.auth.userId}, $inc: {likes: +1} }
      ).then(() => 
      res.status(200).json({message: "post liké !", likeActive: true})
      ).catch((error) => 
      res.status(400).json({error})
      )
    }
  })
} 

