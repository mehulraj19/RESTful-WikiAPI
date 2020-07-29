
// deaclaring all modules
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const ejs = require("ejs")

const app = express();

app.use(bodyParser.urlencoded({extended: true}));

//Creating Database
mongoose.connect("mongodb://localhost:27017/wikiDB",{ useNewUrlParser: true , useUnifiedTopology: true});

const articleSchema = new mongoose.Schema({
  title: String,
  content: String
});

const Article = mongoose.model("Article",articleSchema);

// /////////////////////////////////Head Route////////////////////////////
app.route("/articles")
  .get(function(req,res){

    Article.find({},function(err,foundArticles){
      if(err){
        res.send(err);
      }else{
        res.send(foundArticles);
      }
    });
  })

  .post(function(req,res){
    const newArticle = new Article({
      title: req.body.title,
      content: req.body.content
    });
    newArticle.save(function(err){
      if(err){
        res.send(err);
      }else{
        res.send("Added Sucessfully!!")
      }
    });
  })

  .delete(function(req,res){
    Article.deleteMany({},function(err){
      if(err){
        res.send(err);
      }else{
        res.send("All articles deleted!!");
      }
    })
  });
/////////////////////////////////End of Head Route /////////////////////////////////////

////////////////////////////////RouteNew//////////////////////////////////////////////
app.route("/articles/:articleTitle")

  .get(function(req,res){
    Article.findOne({title: req.params.articleTitle},function(err,foundArticle){
      if(err){
        res.send(err);
      }else if(foundArticle){
        res.send(foundArticle);
      }else{
        res.send("No match found!!");
      }
    });
  })

  .put(function(req,res){
    Article.update(
      {title: req.params.articleTitle},
      {title: req.body.title, content: req.body.content},
      {overwrite: true},
      function(err){
        if(err){
          res.send(err);
        }else{
          res.send("Sucessfully Updated!!");
        }
    });
  })

  .patch(function(req,res){
    Article.update(
      {title: req.params.articleTitle},
      {$set: req.body},
      function(err){
        if(err){
          res.send(err);
        }else{
          res.send("Succesfully updated!!");
        }
      }
    )
  })

  .delete(function(req,res){
    Article.deleteOne({title: req.params.articleTitle},function(err){
      if(err){
        res.send(err);
      }else{
        res.send("Succesfully Deleted!!");
      }
    });
  });
//////////////////////////////////End of Route///////////////////////////////////

// Server connection
app.listen(3000,function(){
  console.log("Server is runnning on port 3000");
})
