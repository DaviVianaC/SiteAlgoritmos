const http = require('http');
const fs = require('fs');
const hostname = 'localhost';
const port = 3000;
const responseFile = (res, file, contentType) => {
    fs.readFile(file, null, (err, data) => {
        if(err){
            res.statusCode = 500;
            res.end(err.message);
        }else{
            res.statusCode = 200;
            res.setHeader('Content-Type', contentType);
            res.write(data);
            res.end();
        }
    });
}

const server = http.createServer((req, res) => {
    switch(req.url){
        case '/' || '/index.html':
            responseFile(res, '../client/html/index.html', 'text/html');
            break;
        case '/index.css':
            responseFile(res, '../client/css/index.css', 'text/css');
            break;
        case '/isPrime.html':
            responseFile(res, '../client/html/isPrime.html', 'text/html');
            break;
        case '/isPrime.html':
            responseFile(res, '../client/html/isPrime.html', 'text/html');
            break;
        case '/quickSort.html':
            responseFile(res, '../client/html/quickSort.html', 'text/html');
            break;
        default:
            res.statusCode = 404;
            res.end('Página nâo encontrada.');
    }
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});