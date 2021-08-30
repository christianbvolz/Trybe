const fetch = require('node-fetch');

const getDogPicture = async () => {
  try {
    let response = await fetch('https://dog.ceo/api/breeds/image/random');
    response = await response.json();
    return response;
  } catch(error) {
    return error;
  }
};

// getDogPicture().then(response => console.log(response));
module.exports = { getDogPicture };
