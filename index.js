const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const userRouter = require('./routes/user');
const jobRouter = require('./routes/job');
const testRouter = require('./routes/test');
const fileRouter = require('./routes/file');
const pdfController = require('./routes/pdf');
const videoRouter = require('./routes/video');
const paperRouter = require('./routes/paper');
const replyRouter = require('./routes/reply')
const discussionRouter = require('./routes/discussion');
const fileUpload = require('express-fileupload');
const cloudinary = require('cloudinary').v2;

const app = express();

app.use(express.json());
app.use(cors());
app.use(cookieParser());
app.use(fileUpload({
    useTempFiles: true
}))

app.use((_, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});


app.use('/user', userRouter);
app.use('/job', jobRouter);
app.use('/test', testRouter);
app.use('/file', fileRouter);
app.use('/pdf', pdfController);
app.use('/video', videoRouter);
app.use('/paper', paperRouter);
app.use('/reply', replyRouter);
app.use('/discussion', discussionRouter);

const url = "mongodb://localhost:27017/Career";
mongoose.connect(url, {useNewUrlParser: true}, (err)=>{
    if(err) throw err;
    console.log("Connected to Database");
})

app.listen(6000, () => {
    console.log("Listening at port 6000");
})