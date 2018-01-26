const server = require('express')();
const http = require('http');
const port = 3000;

http.createServer(server).listen(port, () => {
    console.log('http redirect server start with 3000 port');
});

server.get('*', (req, res) => {
    res.redirect('https://' + req.headers.host + req.url);
});

