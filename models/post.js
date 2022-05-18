const mongoose = require('mongoose');
const Scema = mongoose.Schema;

const postScema = new Scema({
  text: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
}, {timestamps: true});

const Post = mongoose.model('Post', postScema)

module.exports = Post;