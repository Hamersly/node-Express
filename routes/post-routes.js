const express = require('express');
const router = express.Router();

const {
  getPosts,
  getPost,
  deletePost,
  getAddPost,
  addPost,
  getEditPost,
  editPost
} = require('../controllers/post-controller')

router.get('/posts/:id', getPost)
router.delete('/posts/:id', deletePost)
router.get('/posts', getPosts)
router.get('/edit/:id', getEditPost);
router.put('/edit/:id', editPost);
router.post('/add-post', addPost)
router.get('/add-post', getAddPost)

module.exports = router;