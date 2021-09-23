import axios from 'axios';
 
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