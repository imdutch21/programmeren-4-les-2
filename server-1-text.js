let http = require('http');
const port = process.env.PORT || 3000;
function onRequest(request, response) {
    console.log('Er was een request.');
    response.writeHead(200, {'content-type': 'application/json'});
    response.write(JSON.stringify({naan:'test', achternaam:'2'}));
    response.end();
}

http.createServer(onRequest).listen(port);
console.log('De server luistert op poort ' + port);