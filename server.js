// Server code!

// Write code here:

const net = require("net");

const server = net.createServer(client => {

    console.log("Client Connected");
    client.write("Welcome, You are connected");


    client.on("data", data => {

        const msg 
    })
})