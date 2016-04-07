var test   = require('tap').test;
var splitter;
var awsArn = 'arn:aws:lambda:us-east-1:123456789012:function:ProcessKinesisRecords';

test('Load splitter', function (t){
  splitter = require('../index.js');
  t.type(splitter, 'function', 'splitter loaded');
  t.end();
});

test('Split aws arn', function (t){
  splitedArn = splitter(awsArn);
  t.equal(splitedArn.partition, 'aws');
  t.equal(splitedArn.service, 'lambda');
  t.equal(splitedArn.region, 'us-east-1');
  t.equal(splitedArn.account_id, '123456789012');
  t.equal(splitedArn.path, 'function:ProcessKinesisRecords');
  t.end();
});
