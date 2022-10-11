
const fs = require('fs')
const port = 8080
const hostname = "127.0.0.1";
const express = require('express')
const app = express();

app.listen(port, hostname, function () {
  console.log(`Server running at http://${hostname}:${port}/`);
});


    const content =  '<!DOCTYPE html>' +
    '<html>' +
    '    <head>' +
    '        <meta charset="utf-8" />' +
    '        <title>ECE AST</title>' +
    '    </head>' + 
    '    <body>' +
    '       <p>Hello World!</p>' +
    '    </body>' +
    '</html>'
    

    app.get("/", function (req, res) {
        res.json(content);
      });
    
    
      app.get("/hello/:name", function (req, res) {
        res.send(`Hello, ${req.params.name} !`);
      });
    
    
    
      app.get("/about/:filename", function (req, res) { 
            if (fs.existsSync("./content/"+req.params.filename)) {
                res.writeHead(200, { 'Content-Type': 'application/json' });
                const fileContent = require('./content/'+params.filename)
                res.write(JSON.stringify(fileContent));
                res.end();
              }else {
                res.end("File not found")
            } 
      });
    
  

/*
const serverHandle = (req,res) => {
    const route = url.parse(req.url)
    const path = route.pathname 
    const params = qs.parse(route.query)
  
    res.writeHead(200, {'Content-Type': 'text/plain'});

    
    switch (path) {
      
        case '/':
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end(content)
            break;

        case '/hello':
            if ('name' in params ) res.end(`Hello, ${params.name} !` )
            else res.end('Hello Mr. Noname')
            break;
        case '/about':   
        if ('filename' in params ){ 
            if (fs.existsSync("./content/"+params.filename)) {
                res.writeHead(200, { 'Content-Type': 'application/json' });
                const fileContent = require('./content/'+params.filename)
                res.write(JSON.stringify(fileContent));
                res.end();
              }else {
                res.end("File not found")
            }

        }
            break;
        default:
            res.end("Erreur 404")    
    }
} 
*/
module.exports = {
    serverHandle
 
}

