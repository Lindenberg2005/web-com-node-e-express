const express = require('express');
const handlers = require('./lib/handlers')
//se importar o express-handlebars assim, tem que usar exphbs.engine({defaultLayout:'main'})
//const exphbs = require('express-handlebars');
const { engine: exphbs } = require('express-handlebars')
const app = express();
const port = process.env.PORT || 3000;

//configura o view engine Handlebars
//app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));

app.set('view engine', 'handlebars');

app.use(express.static(__dirname + '/public'))

//definindo as rotas

app.get('/', handlers.home)

app.get('/about', handlers.about)


//página 404 personalizada
app.use(handlers.notFound)

//página 500 personalizada
app.use(handlers.serverError)


if (require.main === module) {
    app.listen(port, () => {
        console.log(
            `Express started on http://localhost:${port};`
            + `press Ctrl-C to terminate.`)
    })
} else {
    module.exports = app
}

