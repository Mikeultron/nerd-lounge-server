import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";
import { serverOnConnection } from "./model/serverOnConnection";

const PORT = 3000 || process.env.PORT;
const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer);

io.on("connection", serverOnConnection);

httpServer.listen(PORT, () => console.log(`Listening on port ${PORT}`));

export { io };
