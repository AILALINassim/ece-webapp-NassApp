
const fs = require('fs')
const port = 8080
const hostname = "127.0.0.1";
const express = require('express')
const app = express();

app.use(express.json())

let db = {
  articles: [
    {
      id: '6ec0bd7f-11c0-43da-975e-2a8ad9ebae0b',
      title: 'My article',
      content: 'Content of the article.',
      date: '04/10/2022',
      author: 'Liz Gringer'
    },
    // ...
  ],
  comments: [
    {
      id: '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d',
      timestamp: 1664835049,
      content: 'Content of the comment.',
      articleId: '6ec0bd7f-11c0-43da-975e-2a8ad9ebae0b',
      author: 'Bob McLaren'
    },
    // ...
  ]
}

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
                const fileContent = require('./content/'+req.params.filename)
                res.write(JSON.stringify(fileContent));
                res.end();
              }else {
                res.end("File not found")
            } 
      });
    
  


         
      app.post("/articles",  (req, res) => {
        console.log(req.body)
        
       let article =  {
          id: req.body.id,
          title: req.body.title,
          content: req.body.content,
          date: req.body.date,
          author: req.body.author
        }
        db.articles.push(article)
        res.json(article);
        res.end()
      });

               
      app.get("/articles/:id",  (req, res) => {
        let article = db.articles.find( article => article.id === req.params.id)
        if(article != null){
          res.json(article) 
          res.end()
        }
        return
      });

      app.get("/articles/:id/comments",  (req, res) => {
        let comments = db.comments.filter( comment => comment.articleId === req.params.id)
        res.json(comments) 
        res.end()
      });

      app.post("/articles/:id/comments",  (req, res) => {
       console.log(req.body)
       let comment =  {
          id: req.body.id,
          timestamp: Date.now(),
          content: req.body.content,
          articleId: req.params.id,
          author: req.body.author
        }
        db.comments.push(comment)
        console.log(db.comments)
        res.json(comment);
        res.end()
      }); 

      app.get("/articles/:id/comments/:commentid",  (req, res) => {
        let comments = db.comments.filter( comment => comment.articleId === req.params.id && comment.id === req.params.commentid)
        console.log(comments)
        res.json(comments) 
        res.end()
      });