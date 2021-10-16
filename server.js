const serverless = require('serverless-http');
const express = require('express');
const images = require('../../images/images.json');

const app = express();

const router = express.Router();

app.use(express.json());
app.use(express.static('public'));

app.get('/express_backend', (req, res) => {
  res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
});

router.get('/api/:width/:height', (req, res, next) => {
    const { width, height } = req.params;
    const yourImage = images[Math.floor(Math.random() * images.length)];
    res.writeHead(200, {'Content-Type': 'image/svg+xml', 'Cache-Control': 'public, max-age=86400'});
  return res.end(
      '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="'+ width + '" height="' + height +
      '" viewBox="0 0 ' + yourImage.width + ' ' + yourImage.height +
      '" preserveAspectRatio="xMidYMid slice"> ' +
      '<image xlink:href="' + yourImage.data + '" width="' + yourImage.width + '" height="' + yourImage.height + '" /></svg>');
});

app.use('/.netlify/functions/server', router);

module.exports = app;
module.exports.handler = serverless(app);
