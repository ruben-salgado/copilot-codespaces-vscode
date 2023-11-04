// Create web server application
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
// Use body parser to parse JSON body
app.use(bodyParser.json());
// Create a new comment
app.post('/comments', (req, res) => {
  const comment = req.body.comment;