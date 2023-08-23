const express = require('express');
const app = express();

app.use(express.static(__dirname + '/public'));

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//라우트 객체 생성
const mainRouter    = require('./routes/face');
const userRouter    = require('./routes/user');

//라우트 설정
app.use('/', mainRouter);
app.use('/user', userRouter);

const PORT = 8080;
app.listen(PORT, function() {
    console.log('Listening on port: ', PORT);
});