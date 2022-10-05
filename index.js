// Import a module
const http = require('http')

// Define a string constant concatenating strings
const content = <!DOCTYPE html>
<html> 
    <head>
        <meta charset="utf-8" />
        <title>ECE AST</title>
    </head>
    <body>
       <p>Hello World!</p>
    </body>
</html>

const serverHandle = function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(content);
  res.end();
}
server.listen(localhost:8080,() => console.log("server is running at http://localhost:3003/"))
