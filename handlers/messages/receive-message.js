var AWS = require('aws-sdk');

var sqs = new AWS.SQS({ region: 'eu-west-1' });

var QUEUE_URL = '{get queue url somehow}';

module.exports.handler = (event, context, callback) => {
  console.log('Receive Message:', event);

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
