const express = require('express');
const app = express();
const routes = require('../app/routes');

app.set('view engine', 'ejs');
app.set('views', './src/app/views')

routes(app);

module.exports = app;