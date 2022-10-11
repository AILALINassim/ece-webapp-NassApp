
const fs = require('fs')
const express = require('express')
const router = express.Router();



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

const content = '<!DOCTYPE html>' +
    '<html>' +
    '    <head>' +
    '        <meta charset="utf-8" />' +
    '        <title>ECE AST</title>' +
    '    </head>' +
    '    <body>' +
    '       <p>Hello World!</p>' +
    '    </body>' +
    '</html>'


    router.get("/", function (req, res) {
    res.json(content);
});


router.get("/hello/:name", function (req, res) {
    res.send(`Hello, ${req.params.name} !`);
});



router.get("/about/:filename", function (req, res) {
    if (fs.existsSync("./content/" + req.params.filename)) {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        const fileContent = require('./content/' + req.params.filename)
        res.write(JSON.stringify(fileContent));
        res.end();
    } else {
        res.end("File not found")
    }
});


router.post("/articles", (req, res) => {
    console.log(req.body)

    let article = {
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


router.get("/articles/:id", (req, res) => {
    let article = db.articles.find(article => article.id === req.params.id)
    if (article != null) {
        res.json(article)
        res.end()
    }
    return
});

router.get("/articles/:id/comments", (req, res) => {
    let comments = db.comments.filter(comment => comment.articleId === req.params.id)
    res.json(comments)
    res.end()
});

router.post("/articles/:id/comments", (req, res) => {
    console.log(req.body)
    let comment = {
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

router.get("/articles/:id/comments/:commentid", (req, res) => {
    let comments = db.comments.filter(comment => comment.articleId === req.params.id && comment.id === req.params.commentid)
    console.log(comments)
    res.json(comments)
    res.end()
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
module.exports =router

