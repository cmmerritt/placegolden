import express from 'express';
import * as path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import * as fs from 'fs';
import images from './images/images.js';

const app = express();

app.use(express.json());
app.use(express.static('public'));

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.get('/express_backend', (req, res) => {
  res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' }); 
});

const currentDir = process.env.LAMBDA_TASK_ROOT || __dirname;

app.get('/:width/:height', (req, res, next) => {
    let { width, height } = req.params;
    // fs.readFile(path.join(currentDir, 'images/images.json'), 'utf-8', (err, data) => {
    //      if(err) return res.redirect('/about');
    
    // const images = JSON.parse(data);
    let ratio = width/height;

    const yourImage = images[Math.floor(Math.random() * images.length)];

      // let getImageAttempts = 0;
      // const getImage = () => {
      //   const yourImage = images[Math.floor(Math.random() * images.length)];
      //   console.log('yourImage', yourImage);
      //   const yourImageRatio = yourImage.width/yourImage.height;
  
      //   if((ratio < 0.8 && yourImageRatio > 1) || (ratio > 1.2 && yourImageRatio < 1)) {
      //     getImageAttempts++;
      //     if(getImageAttempts < 10) {
      //       getImage();
      //     } else {
      //       return yourImage;
      //     }
      //   } else {
      //     return yourImage;
      //   }
      // }
      // const image = getImage();

      console.log('image from server.js', yourImage);

      res.json(yourImage);
  
      // res.writeHead(200, {'Content-Type': 'image/svg+xml', 'Cache-Control': 'public, max-age=86400'});
      // return res.end('<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="' + width + '" height="' + height + '" viewBox="0 0 ' + image.width + ' ' + image.height + '" preserveAspectRatio="xMidYMid slice"> width="' + image.width + '" height="' + image.height + ' /></svg>');
});


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));