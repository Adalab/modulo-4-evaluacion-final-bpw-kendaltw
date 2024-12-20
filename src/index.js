const express = require("express");
const cors = require("cors");
const mysql = require("mysql2/promise");

require('dotenv').config();

//crear el servidor
const server = express();

//configurar servidor para que acepte peticiones externas
server.use(cors());
server.use(express.json());

//funcion para conectar la base de datos
async function getDBConnection() {
    const connection = await mysql.createConnection({
        host: "localhost",
        user: "root",
        password: process.env.PASSWORD_DB,
        database: process.env.USER_DB
    });
    connection.connect();
    return connection;
}

//escuchar el puerto
const port = process.env.PORT;
server.listen(port, () => {
    console.log(`Server is running. Go to http://localhost:${port}`);
})




//Endpoints


//insertar una canción

server.post("/api/song", async (req, res) => {
    const { name, artist, genre } = req.body;
    const connection = await getDBConnection();
    const query = "INSERT INTO songs (name, artist, genre) VALUES (?, ?, ?)";
    const [result] = await connection.query(query, [name, artist, genre]);
    // console.log(result);
    connection.end();
    res.status(201).json({
        success: true,
        id: result.insertId
    });
})


//Listar todos los temazos

server.get("/api/songs", async (req, res) => {
    const connection = await getDBConnection();
    const query = "SELECT * FROM songs";
    const [result] = await connection.query(query);
    // console.log(result);
    connection.end();
    res.status(200).json({
        results: result
    });
})


//Actualizar un temazo con url params

server.put("/api/song/:id", async (req, res) => {
    const id = req.params.id;
    const { name, artist, genre } = req.body;
    const connection = await getDBConnection();
    const query = "UPDATE songs SET name = ?, artist = ?, genre = ? WHERE id = ?";
    const [result] = await connection.query(query, [name, artist, genre, id])
    // console.log(result);
    connection.end();
    res.status(200).json({
        success: true
    });
})


//Eliminar una canción

server.delete("/api/song/:id", async (req, res) => {
    const id = req.params.id;
    const connection = await getDBConnection();
    const query = "DELETE from songs WHERE id = ?";
    const [result] = await connection.query(query, [id])
    console.log(result);
    res.status(200).json({ success: true });
})
