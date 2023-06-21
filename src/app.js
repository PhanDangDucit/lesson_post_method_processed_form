const path = require('path');
const express = require('express');
const { engine } = require('express-handlebars');
const morgan = require('morgan');
const app = express();
const port = 20000;

app.use(express.static(path.join(__dirname, 'public')));
app.use(morgan('combined'));

app.engine('hbs', engine({
    extname: '.hbs'
}));

// Xu ly gui form data tu client len server
    // urlencoded() method --> xu ly Html form
app.use(express.urlencoded({
    extended: true
}));
    // json() method --> xu ly XmlHttpRequest, ajax, js, axios, fetch...
app.use(express.json());


app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resource/views'));

app.post('/news', (req, res) => {
    console.log(req.body.comment);
    res.render('news');
})
app.post('/search', (req, res) => {
    res.render('search');
})
app.get('/search', (req, res) => res.render('search'));
app.get('/', (req, res) => {
    console.log(req?.query?.price);
    res.render('home')
});

app.listen(port);