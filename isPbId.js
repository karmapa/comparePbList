module.exports = function isPbId(str) {
  str = str || '';
  return !! str.match(/^(\d+[abcde]?)\.(\d+)([abcde])$/);
};
