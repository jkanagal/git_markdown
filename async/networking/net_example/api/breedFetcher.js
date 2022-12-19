const request = require('request');



const fetchBreedDescription = function (breedName, callback) {
  request(`https://api.thecatapi.com/v1/images/search?breed_ids=${breedName}`, (error, response, body) => {
    if (error) {
      return callback(error, null);
    }
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    console.log('body: ', body);

    const data = JSON.parse(body);
    const firstEntry = data[0];

    if (data.length === 0) {
      console.log('cant find breed');
    } else {
      console.log("description of cat: ", firstEntry);
    }
  });
};

module.exports = { fetchBreedDescription };