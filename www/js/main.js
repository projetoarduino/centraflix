
// 37 - left
// 38 - up
// 39 - right
// 40 - down
var selecionado = ""

$(document).keydown(function (e) {
    if (e.which == 37) {
        selecionado = "netflix"
        console.log(selecionado);
        $("#retro").css("box-shadow", "")
        $("#netflix").css("box-shadow", "black 0.5em 0.5em 0.3em")
        return false;
    }
    if (e.which == 39) {
        selecionado = "retro"
        console.log(selecionado);
        $("#netflix").css("box-shadow", "")
        $("#retro").css("box-shadow", "black 0.5em 0.5em 0.3em")
        return false;
    }
    if (e.which == 13) {
        ws.send(selecionado);
    }
});
//Client ws
let ws = new WebSocket(`ws://${window.location.hostname}:9090`);

ws.onopen = function (e) {
    //alert("[open] Connection established, send -> server");
    
};

ws.onmessage = function (event) {
    console.log(`Data received: ${event.data}`);    
};

ws.onclose = function (event) {
    alert("websocket fechado")
};

ws.onerror = function (error) {
    alert(`[error] ${error.message}`);
};