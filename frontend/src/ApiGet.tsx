import axios from 'axios';

// axios.defaults.headers.get['Access-Control-Allow-Origin'] = '*';

export const ApiGet = (URL:string):void => {
  axios
    .get(URL)
    .then((results) => {
      console.log(results.data);
    })
    .catch((error) => {
      console.log('failed communication');
      console.log(error.status);
  });
};