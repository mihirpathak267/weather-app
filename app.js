const express = require('express');
const https = require('node:https');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({extended:true}));

module.exports = app;