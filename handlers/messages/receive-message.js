var AWS = require('aws-sdk');

var sqs = new AWS.SQS({ region: process.env.region });

module.exports.handler = (event, context, callback) => {
  console.log('Receive Message:', event);

  const queueUrl = `https://sqs.${process.env.region}.amazonaws.com/${require('alai').parse(context)}/${process.env.sqs}`;
  console.log('SQS Queue Url:', queueUrl);

  var params = {
    MessageBody: JSON.stringify(event),
    QueueUrl: queueUrl
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
