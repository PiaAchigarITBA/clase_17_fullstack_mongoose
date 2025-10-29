const express = require('express')
require("dotenv").config()
const app = express()
const { connectDB } = require("./data/db")
const userRoutes = require("./routes/user.routes")
const postRoutes = require("./routes/post.routes")
const PORT = process.env.PORT || 3000
// Middleware de Express
app.use(express.json());

//Rutas a los enpoints de User
app.use("/api/users",userRoutes)

//Rutas a los enpoints de Post
app.use("/api/post",postRoutes)

connectDB()
    .then(() => {
        console.log('✅ Base de Datos conectada')
        // Inicio del servidor
        app.listen(PORT, () => {
            console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`)
        });
    })
    .catch((error) => {
        console.error('❌ Error al conectar a la base de datos:', error.message)
        process.exit(1)
    });