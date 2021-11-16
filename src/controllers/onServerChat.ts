import { Socket } from "socket.io";

/**
 * @description send user's message to current room
 *
 * @param socket Server socket
 */
const onServerChat = (socket: Socket) => {
  socket.on("server_chat", (data) => {
    const { username, message, room } = data;
    socket.to(room).emit("client_chat", {
      username,
      room,
      message,
    });
  });
};

export { onServerChat };
