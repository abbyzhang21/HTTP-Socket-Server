//load the TCP library
const net = require("net");
//start a TCP server
const server = net.createServer(client => {
  client.write("Aloha");
  client.on("data", data => {
    console.log(data.toString());
    data.toString();
  });
});
server.listen(8080, () => {
  console.log("Server listening on port 8080");
});
