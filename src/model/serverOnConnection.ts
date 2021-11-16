import { Socket } from "socket.io";
import { onServerChat } from "../controllers/onServerChat";
import { onServerCreateRoom } from "../controllers/onServerCreateRoom";
import { onServerDisconnect } from "../controllers/onServerDisconnect";
import { onServerJoinRoom } from "../controllers/onServerJoinRoom";

export const serverOnConnection = (socket: Socket) => {
  console.clear();

  console.log("A user is connected");
  socket.on("disconnect", () => console.log("A user disconnected"));

  // Server events
  onServerCreateRoom(socket);
  onServerJoinRoom(socket);
  onServerDisconnect(socket);
  onServerChat(socket);
};
