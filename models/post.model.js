const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
  titulo: String,
  contenido: String,
  autor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User' 
  }
}, { timestamps: true })

const Post = mongoose.model('Post', postSchema)
module.exports = Post