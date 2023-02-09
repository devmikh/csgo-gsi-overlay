const express = require("express");
const app = express();
const http = require("http");
const { Server } = require("socket.io");
const cors = require('cors');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173",
    methods: ["GET", "POST"]
  }
})



// io.on('connection', (socket) => { 
//   console.log(`User connected: ${socket.id}`);

//   socket.on("send_message", (data) => {
//     socket.broadcast.emit("receive_message", data);
//   });
// });

app.post("/", (req, res) => {
  console.log(req.body);
  io.emit("game_data", req.body);
  res.status(200);
  res.end();
});

server.listen(3000, () => {
  console.log("Server is running on port 3000");
})




// server.listen(3000, () => {
//   console.log("Server is listening on port 3000");
// });







