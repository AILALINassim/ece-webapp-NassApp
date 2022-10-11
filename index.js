
const fs = require('fs')
const port = 8080
const hostname = "127.0.0.1";
const express = require('express')
const app = express();
const allRoutes = require('./handles.js')
app.use(express.json())
app.use(allRoutes)

app.listen(port, hostname, function () {
  console.log(`Server running at http://${hostname}:${port}/`);
});

//
