//server.js
const express = require('express');
const app = express();
const path = require('path');
app.use(express.static('./dist/webvizualizer'));
app.get('/*', function(req, res) {
  res.sendFile(path.join('./dist/webvizualizer/index.html'));
});
app.listen(process.env.PORT || 8080);