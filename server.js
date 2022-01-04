const express = require("express");

const app = express();

app.get('/ping', (_request, response) => {
    response.json('pong');
});

const port = getRandomPort(3000, 4000);
console.log(port);

app.listen(port);

function getRandomPort(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}