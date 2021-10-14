import express from 'express';
import * as path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import * as fs from 'fs';
import images from './images/images.js';

const app = express();
const imageDir = '/public/images';
const BASE_URL = 'localhost:5000'

app.use(express.json());
app.use(express.static('public'));

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.get('/express_backend', (req, res) => {
  res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' }); 
});

app.get('/:width/:height', (req, res, next) => {
  const fileOrJSImageSource = 'json';
  let imageData1 = '';
  if(fileOrJSImageSource === 'file') {
      const files = fs.readdirSync(__dirname + imageDir);
      const chosenFile = files[Math.floor(Math.random() * files.length)];
      imageData1 = base64Sync(__dirname + imageDir + '/' + chosenFile)
  } else {
      const yourImage = images[Math.floor(Math.random() * images.length)];
      imageData1 = yourImage.data
  };

  let base64Data = imageData1.replace(/^data:image\/(png|jpeg|jpg);base64,/, '');

  const img = Buffer.from(base64Data, 'base64');

  res.writeHead(200, {
  'Content-Type': 'image/jpeg',
  'Content-Length': img.length
  });

  res.end(img);
});


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));