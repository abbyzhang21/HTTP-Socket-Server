




const net = require('net');
const carlPage = require('./carlPage.js');
// console.log(carlPage);
const indexPage = require('./index.js');
// console.log(indexPage);
const heliumPage = require('./helium.js');
const hydrogenPage = require('./hydrogen.js');
const errorPage = require('./404.js');
const stylePage = require('./styles.js');
// 
const port = 8080;
const date = new Date();

function getPage(uri) {

    console.log(uri);



    if (uri === '/carlPage'){
        //load index.html
        const message = `HTTP/1.1 200 OK\nServer: carl\nDate: ${date} \n Content-Type: *\n\n${carlPage}`;
        return message;
        
    }
    
    else if (uri === '/index'){
        //load index.html
        const message = `HTTP/1.1 200 OK\nServer: carl\nDate: ${date} \n Content-Type: *\n\n${indexPage}`;
       return message;
        
    }
    
    else if(uri === '/hydrogen'){
        //load hydrogen.html
        const message = `HTTP/1.1 200 OK\nServer: carl\nDate: ${date} \n Content-Type: *\n\n${hydrogenPage}`;
            return message;
           
        }
    
    else if(uri === '/helium'){
        //load helium.html
        const message = `HTTP/1.1 200 OK\nServer: carl\nDate: ${date} \n Content-Type: *\n\n${heliumPage}`;
        return message;
        
    }

    else if (uri === '/css/styles.css'){
        const message = `HTTP/1.1 200 OK\nServer: carl\nDate: ${date} \n Content-Type: text/css\n\n${stylePage}`;
        return message;
        
    }

    else{
        //load 404.html
        const message = `HTTP/1.1 200 OK\nServer: carl\nDate: ${date} \n Content-Type: *\n\n${errorPage}`;
        return message;
        
    
    }
}


const server = net.createServer(client => {
    client.setEncoding('utf8');
    client.on('data', data => {
        console.log('******************');
        let headerLine1 = data.split("\n")[0].split(" ");
        let requestType = headerLine1[0];
        let uri = headerLine1[1];
        let page = getPage(uri);
        client.write(page);
        client.end();        
      
     
    });

});
    

server.listen(port, () => {
    console.log('server listening on 8080');

});

