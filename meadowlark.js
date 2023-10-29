const express = require('express');
//se importar o express-handlebars assim, tem que usar exphbs.engine({defaultLayout:'main'})
//const exphbs = require('express-handlebars');
const app = express();
const port = process.env.PORT || 3000;

const { engine: exphbs } = require('express-handlebars')

const fortune = require('./lib/fortune')



//configura o view engine Handlebars
//app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.engine('handlebars', exphbs({defaultLayout:'main'}));

app.set('view engine', 'handlebars');

app.use(express.static(__dirname + '/public'))

//definindo as rotas

app.get('/', (req, res)=>res.render('home'))

app.get('/about', (req, res)=>{
    res.render('about', {fortune: fortune.getFortune()})
})


//página 404 personalizada
app.use((req, res)=>{
    res.status(404)
    res.render('404')
})

//página 500 personalizada
app.use((req, res, next)=>{
    console.error(err.message)
    res.status(500)
    res.render('500')
})

app.listen(port, ()=>console.log(
    `Express started on http://localhost:${port};`
    + `press Ctrl-C to terminate.`
))

