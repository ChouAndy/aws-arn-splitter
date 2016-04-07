aws-arn-splitter
================

A simple tool to split [Amazon Resource Name](http://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html).

[![Build Status](https://travis-ci.org/ChouAndy/aws-arn-splitter.svg?branch=master)](https://travis-ci.org/ChouAndy/aws-arn-splitter)

example
=======

``` js
var splitter   = require('aws-arn-splitter');
var awsArn     = 'arn:aws:lambda:us-east-1:123456789012:function:ProcessKinesisRecords';
var splitedArn = splitter(awsArn);

console.log(splitedArn);

// will show
{ partition: 'aws',
  service: 'lambda',
  region: 'us-east-1',
  account_id: '123456789012',
  path: 'function:ProcessKinesisRecords' }
```

install
=======

With [npm](http://npmjs.org) do:

```
npm install aws-arn-splitter
```
