'use strict';

// const fetch = require('node-fetch');
// const AWS = require('aws-sdk'); // eslint-disable-line import/no-extraneous-dependencies

// const s3 = new AWS.S3();

module.exports.log = (event, context, callback) => {
  console.log('log:', event);

  const response = {
      statusCode: 200,
      body: JSON.stringify({
          message: 'Hi there',
          input: event
      })
  };

  callback(null, response);
};