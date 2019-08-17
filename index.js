var express = require('express');
var exec = require('child_process').exec

var app = express();
var path = require('path');

app.use(express.static(path.join(__dirname, 'www'))); //  "public" off of current is root
app.use(express.json());

app.listen(8080);
console.log('Listening on port 8080');

/////////////////////////////////////////////////////////

const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 9090 });

wss.on('connection', function connection(ws) {

    ws.on('message', function incoming(message) {
        console.log('received: %s', message);

        if (message == "netflix") {
            exec('/arquivos de programas/netflix/netflix.exe', function (err) {
                if (err) { //process error
                }

                else {
                    console.log("success open")
                }

            })
        }

        if (message == "retro") {
            exec('/arquivos de programas/retroarch/retroarch.exe', function (err) {
                if (err) { //process error
                }

                else {
                    console.log("success open")
                }

            })
        }
    });

    ws.send('Essa menssagem veio do servidor');
});


//////////////////////////////////////////////////////////



