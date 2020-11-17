var express = require('express');           // Importamos o Express para a nossa aplicação poder utilizar;
var bodyParser = require('body-parser');    // Referência para a requisição da biblioteca(módulo) do Body-parser;
var funcoes = require('./algoritmos');
var app = express();                        // Instanciamos uma aplicação Express. A partir de agora podemos utilizar os comandos que o Express nos fornece;
var path = require('path');                 // Pacote embutido no node. Trabalha com os caminho do SO. Concatena caminhos.

var port = 3000;
app.use(bodyParser.json());            // Está recebendo os dados como json. O bodyParser intercepta as requisições. Essa biblioteca ajudará na leitura dos dados que vamos enviar via POST.

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));          // Indicando a pasta public.

app.set('view engine', 'ejs');      // Setar o motor (template) de views usado.
app.set('views', path.join(__dirname, 'views')); // Caminho da pasta views.

app.get('/', function(req, res) {
    const parametro = {
        titulo: 'Algorítimos Fundamentais'      // O mesmo "titulo" do arquivo "index.ejs"
    };
    res.render('index', parametro);
});


// 1-url Contador
app.post('/contador', function(req, res) {
    var body = req.body;
    var a = parseFloat(body.a);
    var resultado = funcoes.contador(a);       // body.a é a variável enviada para a aplicação. 
    res.send(`O somatório dos números anteriores a ${a} é: ${resultado}`);  // Finalização da requisição;
});

// 2-url Fibonacci


// 3-url MDC


// 4-url Primo


// 5-url Quicksort


// 6-url Somatorio



app.listen(port, function() {                                           // Indicação da porta.
    console.log(`Servidor escutando na porta http://localhost:${port}/`);
});