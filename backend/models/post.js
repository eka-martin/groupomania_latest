const mongoose = require("mongoose");

const postSchema = mongoose.Schema({
  userId: { type: String, required: true },
  name: { type: String, required: true },
  description: { type: String, required: true },
  imageUrl: { type: String, required: true },
  likes: { type: Number },
  dislikes: { type: Number },
  usersDisliked: { type: [String] },
  usersLiked: { type: [String] },
}, {timestamps: true});


module.exports = mongoose.model("Post", postSchema);
