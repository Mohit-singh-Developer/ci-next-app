import {WebSocketServer} from "ws";
import {client} from "@repo/db/client";

const server = new WebSocketServer({
    port:3000
});

server.on("connection", async (socket) => {
  try {
    await client.user.create({
      data: {
        username: Math.random().toString(),
        password: Math.random().toString(),
      },
    });

    socket.send("Hi there, you are connected to the server");
  } catch (err) {
    console.error(err);
    socket.send("Database error");
  }
});