const express = require('express');
const register = require('../controller/register');
const login = require('../controller/login');
const { CreatePost } = require('../controller/CreatePost');
const { DeletePost } = require('../controller/DeletePost');
const { EditPost } = require('../controller/Editpost');
const { filterpost } = require('../controller/FilterPost');
const { allPost } = require('../controller/Allpost');
const { userpost } = require('../controller/userpost');

const router = express.Router();

router.post('/register',register);
router.get('/allpost',allPost)
router.post('/login',login);
router.post('/addpost',CreatePost);
router.delete('/deletepost/:id',DeletePost);
router.put('/editpost/:id',EditPost);
router.post('/filterpost',filterpost);
router.get('/userpost/:userid',userpost)
module.exports ={router};
