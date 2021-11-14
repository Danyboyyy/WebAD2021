const { render } = require('ejs');
const express = require('express');
const router = express.Router();
const Post = require('../model/Post');


router.get('/', async function(req,res){
  const posts = await Post.find();
  res.render('index', {posts});
});


router.get('/newPost', async (req,res) =>{
  res.render('newPost');
});

router.post('/newPost', async (req, res) => {
  const newPost = new Post(req.body);
  await newPost.save();
  res.redirect('/');
});

router.get('/edit/:id', async (req, res) => {
  const post = await Post.findById(req.params.id);
  res.render('edit', {post});
});

router.post('/edit/:id', async (req, res) => {
  await Post.updateOne({_id: req.params.id}, req.body);
  res.redirect('/');
});

router.get('/delete/:id', async (req, res) => {
  const post = await Post.findById(req.params.id);
  res.render('delete', {post});
});

router.post('/delete/:id', async (req, res) => {
  await Post.remove({ _id: req.params.id });
  res.redirect('/');
});

module.exports = router;