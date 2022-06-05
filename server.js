'use strict';

const express = require('express');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';
// App
const app = express();
app.get('/', (req, res) => {
  res.send('Hello World');
});
app.get('/welcome', (req, res) => {
    res.send('Welcome To Docker Git Jenkins Integration');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);                                                                            