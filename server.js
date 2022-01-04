const express = require("express");

const app = express();

app.get('/ping', (_request, response) => {
    response.json('pong');
});

app.listen(3000);