const mongoose = require('mongoose');

const usuarioSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        match: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
    },
    password: {
        type: String,
        required: true,
        min: 4,
    },
      edad: {
    type: Number,
    min: 18,            
    max: 120              
  },
   activo: {
    type: Boolean,
    default: true         
  },
    roles: {
    type: [String],       
    enum: ['usuario', 'editor', 'admin'], 
    default: ['usuario']
  },
  fechaCreacion: {
    type: Date,
    default: Date.now     
  }
  }, {
  timestamps: true           
})
const User = mongoose.model('User', usuarioSchema);
module.exports = User;