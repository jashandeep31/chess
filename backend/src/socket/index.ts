import { Server } from "socket.io";

export const startSocketConnection = (io: Server) => {
  io.on("connection", (socket) => {});
};
