const express = require('express');
const favicon = require('express-favicon');
const path = require('path');

const port = process.env.PORT || 8000;
const app = express();
app.use(favicon(`${__dirname  }/front_end_template/favicon.ico`));
// the __dirname is the current directory from where the script is running
app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, 'front_end_template')));
app.get('/ping', function (req, res) {
  return res.send('pong');
});
app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'front_end_template', 'index.html'));
});
app.listen(port);
