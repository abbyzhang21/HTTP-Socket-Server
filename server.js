const net = require("net");
const PORT = 8080;
const { helium } = require("./helium.js");
const { style } = require("./style.js");
const { notF } = require("./404.js");
const { hydrogen } = require("./hydrogen.js");
const { index } = require("./index.js");

const server = net.createServer(client => {
  client.setEncoding("utf8");
  client.on("data", data => {
    let req = data.toString().split("\n");
    let reqLine = req[0].split(" ");
    let uri = reqLine[1];

    if (uri === "/helium") {
      const date = new Date();
      const status = "HTTP/1.1 200 OK";
      const serverName = "coolServer";
      const message = `${status}\nServer: ${serverName}\nDate: ${date}\nContent-type: *\n\n${helium}`;

      client.write(message);
      client.end();
    } else if (uri === "/index") {
      const date = new Date();
      const status = "HTTP/1.1 200 OK";
      const serverName = "coolServer";
      const message = `${status}\nServer: ${serverName}\nDate: ${date}\nContent-type: *\n\n${index}`;

      client.write(message);
      client.end();
    } else if (uri === "/hydrogen") {
      const date = new Date();
      const status = "HTTP/1.1 200 OK";
      const serverName = "coolServer";
      const message = `${status}\nServer: ${serverName}\nDate: ${date}\nContent-type: *\n\n${hydrogen}`;

      client.write(message);
      client.end();
    } else if (uri === "/css/styles.css") {
      const date = new Date();
      const status = "HTTP/1.1 200 OK";
      const serverName = "coolServer";
      const message = `${status}\nServer: ${serverName}\nDate: ${date}\nContent-type: text/css\n\n${style}`;

      client.write(message);
      client.end();
    } else {
      const date = new Date();
      const status = "HTTP/1.1 200 OK";
      const serverName = "coolServer";
      const message = `${status}\nServer: ${serverName}\nDate: ${date}\nContent-type: *\n\n${notF}`;

      client.write(message);
      client.end();
    }
  });
});

server.listen(PORT, () => {
  console.log("Welcome to the Matrix on port", PORT);
});
