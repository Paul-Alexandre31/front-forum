let Twig = require("twig"),
    express = require('express'),
    app = express();
const axios = require("axios")
app.set('views', `${__dirname}/src`);
app.set('view engine', 'twig');
app.use('/static', express.static(__dirname + '/public'));
const axiosIntance = axios.create({
    baseURL:"localhost:1000/api"
})

// This section is optional and used to configure twig.
app.set("twig options", {

    allow_async: true, // Allow asynchronous compiling
    strict_variables: false
});

app.get('/', function (req, res) {

    res.render('page/home',{

    } );
});
app.get('/rhum', function (req, res) {
    res.render('page/rhum' );
});
app.get('/whisky', function (req, res) {
    res.render('page/whisky' );
});
app.get('/armagnac', function (req, res) {
    res.render('page/armagnac' );
});
app.get('/register', function (req, res) {
    res.render('page/register' );
});
app.get('/connect', function (req, res) {
    res.render('page/connect' );
});
app.get('/static', function (req, res) {
    res.render('img' );
});
app.get('/write_message', function (req, res) {
    res.render('page/write_message');
});

app.get('/post',async function (req, res) {
    //création variable que l'on integre a coté de page/poste apres la virgule, enssuite on va dans le fichier voulu soit post, une fois dans post on ajoute le variable avec la boucle for
   let post_info = await axiosIntance.get("page/write_message") //mettre fin url donc /post
    res.render('page/post_info',post_info);
});



console.log('server run ...')
app.listen(3000);