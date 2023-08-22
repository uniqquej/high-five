const express = require('express');
const app = express();

app.use(express.static(__dirname + '/public'));

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const mainRouter    = require('./routes/face');

app.use('/', mainRouter);

const PORT = 8080;
app.listen(PORT, function() {
    console.log('Listening on port: ', PORT);
});