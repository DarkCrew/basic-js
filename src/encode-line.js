const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let encodeStr = '';
  let count = 1;
  for(let i = 0; i < str.length; i++){
    if(str[i + 1] == str[i]){
      count++;
    }else{
      if(count > 1){
        encodeStr += `${count}${str[i]}`;
      }else{
        encodeStr += `${str[i]}`;
      }
      count = 1;
    }
  }
  return encodeStr;
}

module.exports = {
  encodeLine
};
