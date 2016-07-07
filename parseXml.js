var parse = require('ksana-indexer').xml4kdb.parseXML;
var isPbId = require('./isPbId');

/**
 * parseXml
 * 根據 xml 字串與分隔符來產生 row data
 *
 * @param {string} text
 * @param {string} separator
 * @return {Array}
 */
module.exports = function parseXml(text, separator) {

  var pos = 0;
  var rows = parse(text, {
    csv: false,
    maxsegsize: undefined,
    segsep: separator || 'pb.id',
    trim: false,
    tsv: false
  }).texts;

  return rows.filter(row => isPbId(row.n))
    .map(row => {
      var start = pos;
      pos += row.t.length;
      return {
        id: row.n,
        start: start,
        length: start + row.t.length
      };
    });
}
