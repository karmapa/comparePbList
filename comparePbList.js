function comparePbList(text) {
  var obj = {};
  if('string' !== typeof text) {
    return obj;
  }
  var arrPb = text.replace(/<(pb id="\d+.\d+[abcd]")\/>\r?\n/g, 'pbIdTag$1')
              .replace(/<(jp="\d+.\d+[abcd]") \/>/g, '$1').replace(/\r/g, '')
              .replace(/<.+?>/g, '').split('pbIdTag');
  for (var i = 1; i < arrPb.length; i++) {
    var newPb;
    var lastMatchPbLength = 0;
    arrPb[i].replace(/pb id="(\d+).(\d+[abcd])"/, function(match, vol, pb) {
      newPb = vol + '.' + pb;
      return '';
    }).replace(/pb id="\d+.\d+[ab]"/, '')
    .replace(/(jp=")(\d+.\d+[abcd])(")(.+?[་།])/g, 
    function(match, tagPart1, oldPb, tagPart2, matchSyl, idx) {
      obj[oldPb] =  {'pb' : newPb, 'pos' : idx - lastMatchPbLength,
                     'length' : matchSyl.length};
      lastMatchPbLength = lastMatchPbLength + oldPb.length +
                          tagPart1.length + tagPart2.length;
      return '';
    });
  }
  return obj;
}

module.exports = comparePbList;
