require('dotenv').config();
const mongoose = require('mongoose');
const { connectDB } = require('./db');
const User = require('../models/user.model');
const Post = require('../models/post.model');

const seedUsers = async () => {
    try {
        await connectDB();
        // Limpiar colección antes de insertar
        await User.deleteMany();

        // Crear usuarios de ejemplo
        const users = [
            {
                nombre: 'Ana López',
                email: 'ana@example.com',
                password: '1234',
                edad: 28,
                roles: ['admin']
            },
            {
                nombre: 'Carlos Pérez',
                email: 'carlos@example.com',
                password: 'abcd',
                edad: 35,
                roles: ['editor']
            },
            {
                nombre: 'Lucía Gómez',
                email: 'lucia@example.com',
                password: 'pass123',
                edad: 42,
                roles: ['admin']
            },
            {
                nombre: 'Lucas Gómez',
                email: 'lu@example.com',
                password: 'pass123',
                edad: 49,
                roles: ['usuario']
            }
        ];

        const createdUsers = await User.insertMany(users);
        console.log('✅ Usuarios creados:', createdUsers);

        // Después de crear los usuarios, creo los post
        const posts = [
            {
                titulo: 'Primera viaje por el mundo',
                contenido: 'Contenido del primer post',
                autor: createdUsers[0]._id
            },
            {
                titulo: 'Segundo viaje por el mundo',
                contenido: 'Contenido del segundo post',
                autor: createdUsers[1]._id
            }
        ];

        const createdPosts = await Post.insertMany(posts);
        console.log('✅ Posts creados:', createdPosts);
        process.exit(0);
    } catch (error) {
        console.error('❌ Error al poblar la base de datos:', error.message);
        process.exit(1);
    }
};

seedUsers();