const express = require('express');
const bodyParser = require('body-parser');
const date = require(__dirname + "/date.js")

const app = express();

const items = [];

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));
app.get("/", function(req, res) {

const currentDay = date.getDate();
  res.render('list', {theDay: currentDay, newLists: items})
})

app.post("/", function(req, res){
const newItem = req.body.newItems
items.push(newItem);
res.redirect("/");

})





app.listen(3000, function() {
  console.log("The server is running at port 3000");
})
