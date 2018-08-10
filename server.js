//load the TCP library
const net = require("net");
//keep track of the chat clients
const clients = [];
//start a TCP Server
const server = net.createServer(socket => {
  //Identify this client
  socket.name = socket.remoteAddress + ":" + socket.remotePort;
  clients.push(socket);
});
