const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let min = +(n.toString()[0]);
  for (let i = 0; i < n.toString().length; i++){ 
    if(+(n.toString()[i]) < +(n.toString()[0])){
      min = +(n.toString()[i]);
    }
  }
  
  if(+(n.toString()[0]) < +(n.toString()[1])){
    return +(n.toString().slice(1));
  }else{
    for(let i = n.toString().length - 1; i >= 0; i--){
      if(+(n.toString()[i]) === min){
        return +(n.toString().slice(0, i) + n.toString().slice(i + 1));
      }
    }
  }
}

module.exports = {
  deleteDigit
};
