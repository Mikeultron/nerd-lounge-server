import { Socket } from "socket.io";

const onServerJoinRoom = (socket: Socket) => {
  socket.on("server_join_room", ({ room, username }) => {
    socket.join(room);
    socket.to(room).emit("client_notification", {
      username,
      message: `${username} joined the room`,
    });

    socket.emit("client_in_room", {
      room,
    });
  });
};

export { onServerJoinRoom };
