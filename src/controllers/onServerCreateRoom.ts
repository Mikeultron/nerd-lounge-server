import { Socket } from "socket.io";

/**
 * @description When user create room
 *
 * @param socket Server socket
 */
const onServerCreateRoom = (socket: Socket) => {
  socket.on("server_create_room", ({ room, username }) => {
    socket.join(room);
    socket.emit("client_notification", {
      username,
      message: `Room name: ${room} (Share to you friend who wants to join this room)`,
    });

    socket.emit("client_in_room", {
      room,
    });
  });
};

export { onServerCreateRoom };
