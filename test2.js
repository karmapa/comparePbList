var fs = require('fs');
var parseXml = require('./parseXml');
var isPbId = require('./isPbId');

var dg001Text = fs.readFileSync('./input/degekangyur001.txt', 'utf8');

// 分別取得 pb tag 與 jp tag 的 pos data
var pbRows = parseXml(dg001Text, 'pb.id');
var jpRows = parseXml(dg001Text, 'jp.id');

console.log('pbRows', pbRows);
console.log('jpRows', jpRows);
