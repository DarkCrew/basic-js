const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  let rulesActions = ['--discard-next','--discard-prev','--double-next','--double-prev'];
  if(!(arr instanceof Array)){
    throw new Error("'arr' parameter must be an instance of the Array!");
  }
  let newArr = [...arr];
  for (let i = 0; i < arr.length; i++){
    if(newArr[i] === rulesActions[0]){
      newArr[i + 1] = null;
      newArr[i] = null;
    }
    if(newArr[i] === rulesActions[1]){
      newArr[i - 1] = null;
      newArr[i] = null;
    }
    if(newArr[i] === rulesActions[2]){
      newArr[i] = newArr[i + 1];
    }
    if(newArr[i] === rulesActions[3]){
      newArr[i] = newArr[i - 1];
    }
  }
  return newArr.filter(element => element != null);
}

module.exports = {
  transform
};
