import express from 'express';
import {base64Sync} from 'base64-img';
import * as path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import * as fs from 'fs';
import images from './images/images.js';

const app = express();

app.use(express.json());
app.use(express.static('public'));

app.get('/express_backend', (req, res) => {
  res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' }); 
});

app.get('/:width/:height', (req, res, next) => {
  const { width, height } = req.params;
  let imageData1 = '';

  let ratio = width/height;

  let getImageAttempts = 0;
  const getImage = () => {
    const yourImage = images[Math.floor(Math.random() * images.length)];
    const yourImageRatio = yourImage.width/yourImage.height;
    if((ratio < 0.8 && yourImageRatio > 1) || (ratio > 1.2 && yourImageRatio < 1)) {
      getImageAttempts++;
      if(getImageAttempts < 10) {
        getImage();
      } else {
        return yourImage;
      }
    }
  }

  const image = getImage();
  imageData1 = image.data;

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