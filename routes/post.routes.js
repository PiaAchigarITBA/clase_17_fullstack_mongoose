const express = require('express');
const router = express.Router();
const postController = require('../controllers/post.controlles');

// Crear un nuevo post
router.post('/', postController.createPost);

// Obtener todos los posts
router.get('/', postController.getPosts);

// Obtener un post por ID
router.get('/:id', postController.getPostById);

// Eliminar un post
router.delete('/:id', postController.deletePost);

module.exports = router;