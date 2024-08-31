import express from "express";
import dotenv from "dotenv";
import { createServer } from "node:http";
import { Server } from "socket.io";
import userRoutes from "./routes/user.routes";

// setting up the .env file
dotenv.config();
const RANDOM_NUMBER = Math.floor(Math.random() * 1000);
const PORT = process.env.PORT || 8000;

// app config
const app = express();
app.use(express.json());
const server = createServer(app);
const io = new Server(server);

// server status app
app.get("/", (req, res) => {
  res.send(`Hello world from server , ${RANDOM_NUMBER}`);
});
app.use("/api/v1/users", userRoutes);

server.listen(PORT, () => {
  console.log(`server running at http://localhost:${PORT}`);
});
