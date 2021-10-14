import request from 'superagent';

export const fetchImageByParams = (width, height) => {
  const res = request 
    .get(`/${width}/${height}`);
  console.log(res);
  return res;
};