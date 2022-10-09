const url = require('url')
const qs = require('querystring')
const { resolveSoa } = require('dns')
const fs = require('fs')




const serverHandle = function (req, res) {
    const route = url.parse(req.url)
    const path = route.pathname 
    const params = qs.parse(route.query)
  
    res.writeHead(200, {'Content-Type': 'text/plain'});
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

module.exports = {
    serverHandle
 
}

const callback=(err)=> {
    console.log("Je suis tombé en erreur")
    if (err) {
        console.log("File read failed:", err)
    }
}




