const express = require("express");
const router = express.Router();
const auth = require("../middlewares/auth");
const multer = require("../middlewares/multer-config");
const postCtrl = require("../controllers/posts");

module.exports = () => {
  router.put("/posts/:id", auth, multer, postCtrl.modify);
  router.post("/posts", auth, multer, postCtrl.create);
  router.get("/posts", auth, postCtrl.displayAll);
  router.get("/posts/:id", auth, postCtrl.displayOne);
  router.delete("/posts/:id", auth, multer, postCtrl.delete);
  router.post("/posts/:id/like", auth, postCtrl.like);

  return router;
};
