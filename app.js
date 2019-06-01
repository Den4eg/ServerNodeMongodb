/*routing module*/
const express = require('express');
const app = express();
const path = require('path');
const config = require('./config');
const mongoose = require('mongoose');
const router = require('./routes/admin');
const staticAsset = require('static-asset');
const bcrypt = require('bcrypt');

// Database

mongoose.Promise = global.Promise;
mongoose.set('debug', config.IS_PRODUCTION);

mongoose.connection
    .on('error', error => console.log(error.name))
    .on('close', () => console.log('Database conection closed'))
    .once('open', () => {
        const info = mongoose.connections[0];
        console.log(`Database connected to ${info.host}:${info.port}/${info.name}`)
    });

mongoose.connect(config.MONGO_URL, { useNewUrlParser: true });


// Express setings
app.set('view engine', 'ejs');
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(staticAsset(path.join(__dirname, 'public')));



// routes

app.use('/api', router)


app.get('/', (req, res) => {
    res.render('login');
});

app.get('/index', (req, res) => {
    res.render('index');
});

app.post('/auth', (req, res) => {
    let { login, pass } = req.body
    Auth.find({ login }).then(result => { console.log(result) })
})

// app.get('/create', (req, res) => res.render('create'));
// app.post('/create', (req, res) => {
//     const { title, body } = req.body;

//     Post.create({
//         title: title,
//         body: body
//     }).then(post => console.log(post.id));

//     res.redirect('/');
// });

// catch 404 to forward error handler
app.use((req, res, next) => {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});
// error handler
app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.render('error', {
        message: error.message,
        error: !config.IS_PRODUCTION ? error : {},
        title: 'Ошибочка вышла :('
    });
    console.log(error.status + ' ' + error.message)
});


// Server listener

app.listen(config.PORT, () => {
    console.log(`Server run on port: ${config.PORT}`);
});