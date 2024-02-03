const express = require('express');
var bodyParser = require('body-parser');
const route = require('./routes/route.js');
const multer = require('multer')

const app = express();

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.use(multer().any())



const mongoose = require('mongoose')
mongoose.connect("mongodb+srv://mazhar:brewApps%402023@bm-crud.g5fzgoe.mongodb.net/book_Management_CRUD?retryWrites=true&w=majority", { useNewUrlParser: true })
    .then(() => console.log('mongodb running on 27017'))
    .catch(err => console.log(err))

app.use('/', route);


app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});

