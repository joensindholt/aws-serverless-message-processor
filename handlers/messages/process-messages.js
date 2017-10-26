'use strict'

const AWS = require('aws-sdk')
const SQS = new AWS.SQS({ apiVersion: '2012-11-05' })

const Lawos = require('lawos')

module.exports.handler = function (event, context, callback) {
  console.log('Process Messages:', event);

  const queueUrl = `https://sqs.${process.env.region}.amazonaws.com/${require('alai').parse(context)}/${process.env.sqs}`;
  console.log('SQS Queue Url:', queueUrl);

  const Q = new Lawos(queueUrl, SQS)

  Q.item(
    item => new Promise(done => {
      done();
    })
  );

  Q.work(
    () => Promise.resolve(context.getRemainingTimeInMillis() < 500)
  ).then(
    data => {
      callback(null, data);
    });
}
