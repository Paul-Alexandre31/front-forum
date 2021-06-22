let Twig = require("twig"),
    express = require('express'),
    app = express();
app.set('views', `${__dirname}/src`);
app.set('view engine', 'twig');
app.use('/static', express.static(__dirname + '/public'));


// This section is optional and used to configure twig.
app.set("twig options", {

    allow_async: true, // Allow asynchronous compiling
    strict_variables: false
});

app.get('/', function (req, res) {
    res.render('page/home' );
});
app.get('/register', function (req, res) {
    res.render('page/register' );
});

app.listen(3000);