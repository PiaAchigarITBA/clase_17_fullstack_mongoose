const User = require('../models/user.model');

// Crear usuario
exports.createUser = async (req, res) => {
    try {
        const user = await User.create(req.body);
        return res.status(201).json(user);
    } catch (err) {
        console.error(err);
        if (err.name === 'ValidationError') {
            return res.status(400).json({ error: err.message });
        }
        if (err.code === 11000) {
            return res.status(409).json({ error: 'Email duplicado' });
        }
        return res.status(500).json({ error: 'Server error' });
        //next(err)
    }
};

// Obtener todos los usuarios
exports.getUsers = async (req, res) => {
    try {
        const usuarios = await User.find();
        res.json(usuarios);
    } catch (error) {
        res.status(500).json({ error: error.message });
        //next(err)
    }
};

// Obtener usuario por ID
exports.getUserById = async (req, res) => {
    try {
        const usuario = await User.findById(req.params.id);
        if (!usuario) return res.status(404).json({ error: 'Usuario no encontrado' });
        res.json(usuario);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Actualizar usuario
exports.updateUser = async (req, res) => {
    try {
        const usuarioActualizado = await User.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        if (!usuarioActualizado) return res.status(404).json({ error: 'No encontrado' });
        res.json(usuarioActualizado);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Eliminar usuario
exports.deleteUser = async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.json({ mensaje: 'Usuario eliminado' });
  } catch (error) {
     res.status(500).json({ error: error.message });
  }
};