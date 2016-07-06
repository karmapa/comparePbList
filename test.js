var fs = require('fs');
var comparePbList = require('./comparePbList.js');
var dg001 = fs.readFileSync('./input/degekangyur001.txt', 'utf8');

var list = comparePbList(dg001, 'DG');
console.log(list);
