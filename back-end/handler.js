'use strict';
require('dotenv').config();
const request = require('request');


module.exports.startChatbot = async (event, context, callback) => {

  console.log('Starting up Chatbot...')
  const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.API_KEY}`;

  const req = request(url, function(err, resp, body) {
    console.log('---We made the request to Google News API---');
    let respBody = JSON.parse(resp.body)
    console.log('Status of Body is: ', respBody["status"]);
    console.log('Total # of results is: ', respBody["totalResults"]);
  });

  callback(null, req);



  // return {
  //   statusCode: 200,
  //   body: JSON.stringify({
  //     message: 'Go Serverless v1.0! Your function executed successfully!',
  //     input: event,
  //   }),
  // };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
