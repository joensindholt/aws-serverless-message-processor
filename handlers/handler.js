'use strict';

module.exports.log = (event, context, callback) => {
  console.log('Log:', event);

  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Hi there',
      input: event
    })
  };

  callback(null, response);
};
