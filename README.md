# ece-webapp-ailali-collemare

##


## ⚙ Installation

1. Download or clone repository

2. Go to folder :
>`cd ece-webapp-ailali-collemare`

3. Install dependencies :
> `npm install`

4. Launch project :
> `npm start`

## API Routes
 GET '/' : return "Hello World!" 
 
 GET '/hello?name={name}' :  return "hello, {name}"

 GET '/about?filename={filename}' : return the content of {filename}

 GET /articles - list all articles

 POST /articles - add a new article

 GET /articles/:articleId - get an article by ID

 GET /articles/:articleId/comments - get all comments of the article with articleId

 POST /articles/:articleId/comments - add a new comment to a specific article with articleId

 GET /articles/:articleId/comments/:commentId - get a comment with commentId of the article with articleId



Autors:
  - Nassim AILALI nassim.ailali@edu.ece.fr
  - Nolwen COLLEMARE nolwen.collemare@edu.ece.fr
---
