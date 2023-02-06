const express = require('express');
const app = express();
const PORT = 5000;
const userRouter = require('./routes/user.js');
const authRouter = require('./routes/auth.js');
const postRouter = require('./routes/post.js');
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
require('dotenv').config();

mongoose
    .connect(process.env.MONGOURL)
    .then(() => {
        console.log('DB와 접송중...');
    }).catch((err) => {
        console.log(err);
    });

//미들웨어
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }))
app.use('/api/user', userRouter);
app.use('/api/auth', authRouter);
app.use('/api/post', postRouter);
app.use(express.static('build'));

app.get('/', (req, res) => {
    res.send('/build/index.htmls');
});

app.listen(PORT, () => {
    console.log('서버 기동중');
  })
