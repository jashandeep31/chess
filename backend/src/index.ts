import express from "express";
import dotenv from "dotenv";
import { createServer } from "node:http";
import { Server } from "socket.io";
import passport, { session } from "passport";
import expressSession from "express-session";

// routes import
import userRoutes from "./routes/user.routes";
import authRoutes from "./routes/auth.routes";
// ! strategy should be changed
import "./lib/passport";

// setting up the .env file
dotenv.config();
const RANDOM_NUMBER = Math.floor(Math.random() * 1000);
const PORT = process.env.PORT || 8000;

// app config
// ! change this on the production with the values like secure and httpOnly etc.
const expressSessionConfig: expressSession.SessionOptions = {
  secret: "secureme",
  resave: false,
  saveUninitialized: false,
  cookie: {},
};

const app = express();
app.use(expressSession(expressSessionConfig));
app.use(passport.initialize());
app.use(passport.session());
app.use(express.json());
const server = createServer(app);
const io = new Server(server);

// server status app
app.get("/", (req, res) => {
  res.send(`Hello world from server , ${RANDOM_NUMBER}`);
});
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/users", userRoutes);

server.listen(PORT, () => {
  console.log(`server running at http://localhost:${PORT}`);
});
