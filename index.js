const http = require('http')
const handles = require('./handles.js')
const port = 8080

http.createServer(handles.serverHandle).listen(port, () => console.log(`Server created at localhost:${port}`)) 




 
