import request from 'superagent';

export const fetchImageByParams = (width, height, callback) => {
  request
      .get(`/${width}/${height}`)
      .then(res => {
          //console.log(res.body);
          callback(res.body);
      })
      .catch(err => {
          //console.log(err.message)
          //console.log(err.response)
      })
};
