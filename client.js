const net = require("net");
const client = net.createConnection(8080, () => {
  //   client.write("hello, i am A CLIENT!");
  //   client.write('GET'+path+'HTTP/1.1\nhost: '+host);
  client.on("data", data => {
    console.log(data.toString());
  });
  process.stdin.pipe(client);
});
