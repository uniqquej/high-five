const express = require('express');
const app = express();

const passport          = require('passport');
const passportConfig    = require('./passport');
const session           = require('express-session');
const flash             = require('connect-flash');

passportConfig()

//세션 설정
app.use(
    session({
       resave: false,
       saveUninitialized: false,
       secret: "sessionsecretsessionsecret",
    }),
);
//passport 초기화
app.use(passport.initialize()); //req에 passport 설정 추가
app.use(passport.session());    //req.session에 passport 데이터 추가
app.use(flash());

app.use(express.static(__dirname + '/public'));

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//라우트 객체 생성
const mainRouter    = require('./routes/face');
const userRouter    = require('./routes/user');
const soundRouter    = require('./routes/sound');
const livesoundRouter    = require('./routes/livesound');
const inferRouter    = require('./routes/infer');
const infernsoundRouter    = require('./routes/infernsound.js');

//라우트 설정
app.use('/', mainRouter);
app.use('/user', userRouter);
app.use('/sound', soundRouter);
app.use('/livesound', livesoundRouter);
app.use('/infer', inferRouter);
app.use('/infernsound', infernsoundRouter);

const PORT = 8080;
app.listen(PORT, function() {
    console.log('Listening on port: ', PORT);
});