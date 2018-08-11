const net = require("net");

console.log("\n\nCL process.argv");
console.log(process.argv);
let header =
  "\nHTTP/1.1 200 OK\nServer: nginx/1.4.6(Ubutu)\nDate: Fri, 11 Aug 2018 12:42:15 GMT\nContent-Type: text/html; charset=utf-8\nContent-Length: 40489\nConnection: keep-alive";
let body = "\n\nHello World!";
let clients = [];

const server = net.createServer(client => {
  client.write(header);
  client.write(body);
  console.log("\nCLIENT CONNECTED\n");

  client.on("data", data => {
    console.log(data.toString());
    let msg = data.toString();
  });

  clients.push(client);
});

server.listen(8080, () => {
  console.log("\nServer listening on port 8080");
});
