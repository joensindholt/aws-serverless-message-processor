var QUEUE_URL = 'https://sqs.eu-west-1.amazonaws.com/812954953618/MessageProcessorQueue';
var AWS = require('aws-sdk');
var sqs = new AWS.SQS({ region: 'eu-west-1' });

module.exports.handler = (event, context, callback) => {
  console.log('POST receiveMessage:', event);

  var params = {
    MessageBody: JSON.stringify(event),
    QueueUrl: QUEUE_URL
  };

  sqs.sendMessage(params, (err, data) => {
    if (!err) {
      let response = {
        "isBase64Encoded": false,
        "statusCode": 200,
        "headers": {},
        "body": JSON.stringify(event)
      };
      
      callback(null, response);
    } else {
      console.log('error:', "Fail Send Message" + err);
      context.done('error', "ERROR Put SQS");  // ERROR with message
    }
  });
};