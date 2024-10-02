import UserContext from "@/context/UserContext";
import { Socket } from "socket.io-client";
import { useContext, useEffect, useState } from "react";
import { io } from "socket.io-client";
import { useNavigate } from "react-router-dom";

class socketHandler1 {
  socket: Socket;
  userId: string;
  constructor(socket: Socket, userId: string) {
    this.socket = socket;
    this.userId = userId;
  }

  newGame() {
    this.socket.emit("newGame", {
      userId: this.userId,
    });
  }
  joinGame(gameId: string) {
    this.socket.emit("joinGame", {
      userId: this.userId,
      gameId,
    });
  }
}

type Game = {
  id: string;
  player1Id: string;
  player2Id: string | null;
  player1: {
    name: string;
    avatar: string;
  };
  player2: {
    name: string;
    avatar: string;
  } | null;
} | null;

const useSocket = () => {
  const navigate = useNavigate();
  const { session } = useContext(UserContext);
  const [socket, setSocket] = useState<null | Socket>(null);
  const [socketHandler, setSocketHandler] = useState<null | socketHandler1>(
    null
  );
  const [game, setgame] = useState<Game | null>(null);
  useEffect(() => {
    if (!session) return;

    const socketConnection = io("http://localhost:8000", {
      path: "/socket/v1",
      withCredentials: true,
    });
    socketConnection.on("connect", () => {
      setSocket(socketConnection);
      setSocketHandler(new socketHandler1(socketConnection, session.id));
    });

    socketConnection.on("gameJoined", (data) => {
      const id = data.id as string;
      console.log(data);
      setgame(data.game);
      if (!id) return;
      navigate(`/lobby/${id}`);
    });
    return () => {};
  }, [session, navigate]);

  return {
    socket,
    socketHandler,
    game,
  };
};

export default useSocket;
