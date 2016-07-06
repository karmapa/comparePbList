function comparePbList(text, sutraName) {
  var obj = {};
  if(undefined === text) {
    return obj;
  }
  var arrPb = text.replace(/<(pb id="\d+.\d+[abcd]")\/>\r?\n/g, 'pbIdTag$1')
              .replace(/<(jp="\d+.\d+[abcd]") \/>/g, '$1').replace(/\r/g, '')
              .replace(/<.+?>/g, '').split('pbIdTag');
  sutraName = sutraName || 'comparedSutra';
  for (var i = 1; i < arrPb.length; i++) {
    var newPb, volNum;
    var lastMatchPbLength = 0;
    arrPb[i].replace(/pb id="(\d+).(\d+[abcd])"/, function(match, vol, pb) {
      newPb = vol + '.' + pb;
      volNum = vol;
      return '';
    }).replace(/pb id="\d+.\d+[ab]"/, '')
    .replace(/jp="(\d+.\d+[abcd])"(.+?[་།])/g, function(match, oldPb, matchSyl, idx) {
      obj[oldPb] =  {'pb' : newPb, 'pos' : idx - lastMatchPbLength,
                     'length' : matchSyl.length};
      lastMatchPbLength = lastMatchPbLength + oldPb.length + 5;
      return '';
    });
  }
  return obj;
}

module.exports = comparePbList;
