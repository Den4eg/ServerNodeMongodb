/*routing module*/
const Post = require('./models/post');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const path = require('path');
const staticAsset = require('static-asset');

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(staticAsset(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/create', (req, res) => res.render('create'));
app.post('/create', (req, res) => {
    const { title, body } = req.body;

    Post.create({
        title: title,
        body: body
    }).then(post => console.log(post.id));

    res.redirect('/');
});

module.exports = app;
