import { Socket } from "socket.io";

const onServerDisconnect = (socket: Socket) => {
  socket.on("server_disconnect", (data) => {
    const { username, room } = data;
    socket.to(room).emit("client_notification", {
      message: `${username} disconnected`,
    });
  });
};

export { onServerDisconnect };
