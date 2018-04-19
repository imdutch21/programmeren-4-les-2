let http = require('http');
function onRequest(request, response) {
    console.log('Er was een request.');
    response.writeHead(200, {'content-type': 'application/json'});
    response.write(JSON.stringify({naan:'test', achternaam:'2'}));
    response.end();
}

http.createServer(onRequest).listen(3000);
console.log('De server luistert op poort 3000');