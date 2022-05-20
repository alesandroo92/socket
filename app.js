const express = require("express");
const app = express();
const router = require("./Routes/router");
const { Server } = require("socket.io");
const http = require("http");
const server = http.createServer(app); // Crear el servidor

require("dotenv").config();

app.use(express.json());
app.use(router);

const io = new Server(server);
io.on("connection", (socket) => {
    console.log("Un usuario se ha conectado");

    /*socket.on("chat", (msg) => {
        console.log("Mensaje: "+msg)
    })*/

    socket.on("chat", (msg) => {
        io.emit("chat", msg)
    })
});




server.listen(process.env.PORT, () => {
    console.log("Servidor iniciado en el puerto: "+process.env.PORT);
});