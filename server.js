const net = require("net");

console.log("\n\nCL process.argv");
console.log(process.argv);
let header = "\n\nHTTP/1.1 200 OK\n\nServer: SPARTASERVE";

let clients = [];

const server = net.createServer(client => {
  client.write(header);

  console.log("\nCLIENT CONNECTED\n");

  client.write("\n\nWelcome to SpartaServe");

  client.on("data", data => {
    console.log(data.toString());
    let msg = data.toString();
  });

  clients.push(client);
});

server.listen(8080, () => {
  console.log("\nServer listening on port 8080");
});
