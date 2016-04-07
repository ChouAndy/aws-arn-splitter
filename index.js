module.exports = function(arnString) {
  var splitedArn = arnString.split(':')
  return {
    partition:  splitedArn[1],
    service:    splitedArn[2],
    region:     splitedArn[3],
    account_id: splitedArn[4],
    path:       splitedArn.slice(5).join(':')
  }
}
