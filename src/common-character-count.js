const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let coincidences1 = {};
  let coincidences2 = {};
  let sum = 0;

  for (let i = 0; i < s1.length; i++){
    if(coincidences1[s1[i]] === undefined){
      coincidences1[s1[i]] = 1;
    }else{
      coincidences1[s1[i]] += 1;
    }
  }

  for (let i = 0; i < s2.length; i++){
    if(coincidences2[s2[i]] === undefined){
      coincidences2[s2[i]] = 1;
    }else{
      coincidences2[s2[i]] += 1;
    }
  }

  for(let letter in coincidences1){
    if(coincidences2[letter] != undefined){
      sum += coincidences1[letter] > coincidences2[letter] ? coincidences2[letter] : coincidences1[letter];
    }
  }


  return sum;
}

module.exports = {
  getCommonCharacterCount
};
