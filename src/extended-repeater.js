const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
 function repeater(str, options) {
  let newStr = '';
  let repeatTimes = options['repeatTimes'] > 0 ? options['repeatTimes'] : 1;

  for(let i = 0; i < repeatTimes; i++){
    let additionStr = `${options['addition']}`;
    let additionSeparator = options['additionSeparator'] === undefined ? '|' : options['additionSeparator'];

    for(let j = 0; j < options['additionRepeatTimes'] - 1; j++){
      additionStr += `${additionSeparator}${options['addition']}`;
    }
    let separator = options['separator'] === undefined ? '+' : options['separator'];

    if(additionStr != 'undefined'){
      if(i === repeatTimes - 1){
        newStr += `${str}${additionStr}`;
      }else{
        newStr += `${str}${additionStr}${separator}`;
      }
    }else{
      if(i === repeatTimes - 1){
        newStr += str;
      }else{
        newStr += `${str}${separator}`;
      }
    }
  }
  return newStr;
}

module.exports = {
  repeater
};
