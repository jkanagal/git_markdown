const request = require('request');
const fs = require('fs');

const input = process.argv.slice(2);


request(input[0], (error, response, body) => {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  
  fs.writeFile(`${input[1]}`, body, function(error) {
    if (error) {
      console.log("error:", error);
    } else {
      console.log(`Downloaded and saved ${response.headers["content-length"]} bytes to ${input[1]}`);
    }
  });

});


