import { Server as SocketIOServer, Socket } from "socket.io";
import { db } from "../lib/db";

export const initSocket = (io: SocketIOServer) => {
  io.on("connection", (socket: Socket) => {
    // just handling hte classID event
    socket.on("newGame", async (data) => {
      if (!data.userId) return;
      const game = await db.game.create({
        data: {
          player1Id: data.userId,
        },
        include: {
          player1: true,
          player2: true,
        },
      });

      io.to(socket.id).emit("gameJoined", {
        id: game.id,
        game: game,
      });
    });

    socket.on("joinGame", async (data) => {
      const userId = data.userId;
      const gameId = data.gameId;
      if (!userId || !gameId) return;
      const game = await db.game.findUnique({
        where: { id: gameId },
        include: {
          player1: true,
          player2: true,
        },
      });
      if (!game) return;
      if (game.player1Id === userId) {
        io.to(socket.id).emit("gameJoined", {
          id: game.id,
          game: game,
        });
        return;
      }
      if (game.player2Id === userId) {
        io.to(socket.id).emit("gameJoined", {
          id: game.id,
          game: game,
        });
        return;
      }
      if (game.player2Id) return;

      const updatedGame = await db.game.update({
        where: { id: gameId },
        data: {
          player2Id: userId,
        },
        include: {
          player1: true,
          player2: true,
        },
      });
      io.to(socket.id).emit("gameJoined", {
        id: updatedGame.id,
        game: updatedGame,
      });
    });

    socket.on("classID", (data) => {
      socket.join(data.id);
      io.to(socket.id).emit("joined", {
        message: "Joined to class success",
        classID: data.id,
      });
    });
  });
};
