let Twig = require("twig"),
    express = require('express'),
    app = express();
const axios = require("axios")
app.set('views', `${__dirname}/src`);
app.set('view engine', 'twig');
app.use('/static', express.static(__dirname + '/public'));
const axiosIntance = axios.create({
    baseURL: "http://localhost:1000"
})

// This section is optional and used to configure twig.
app.set("twig options", {

    allow_async: true, // Allow asynchronous compiling
    strict_variables: false
});

app.get('/', async function (req, res) {
    const messages = (await axiosIntance.post("message")).data;
    console.log(messages)
    res.render('page/home', {messages});
});
app.get('/1', async function (req, res) {
    res.render('page/rhum');
});
app.get('/2', function (req, res) {
    res.render('page/whisky');
});
app.get('/3', function (req, res) {
    res.render('page/armagnac');
});
app.get('/register', function (req, res) {
    res.render('page/register');
});
app.get('/connect', function (req, res) {
    res.render('page/connect');
});
app.get('/static', function (req, res) {
    res.render('img');
});
app.get('/write_message', function (req, res) {
    res.render('page/write_message');
});

app.get('/post', async function (req, res) {
    let post_info = await axiosIntance.get("page/write_message")
    res.render('page/post_info', post_info);
});


console.log('server run ...')
app.listen(3000);