const net = require("net");
const client = net.createConnection(8080, () => {
  //DO THIS ON CLIENT:
  //Use process.argv to get the host/path you entered in in terminal (ie: node client.js localhost:8080/blahblahblah)
  //1. Split the string into host and path and store it in variables
  //2. concat the host and path
  //3. then client write it

  client.on("data", data => {
    console.log(data.toString());
  });
  process.stdin.pipe(client);
});
