const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 * 
 */
function renameFiles(names) {
  let arr = [];
  let arrFilter = [];
  for(let i = 0; i < names.length; i++){

    if(i === 0){
      arrFilter.push(names[i]);
    }else{
      if(arr.filter(el => el === names[i]).length > 0){
        arrFilter.push(names[i] + `(${arr.filter(el => el === names[i]).length})`);
      }else{
        if(arrFilter.filter(el => el === names[i]).length > 0){
          arrFilter.push(names[i] + `(${arrFilter.filter(el => el === names[i]).length})`);
        }else{
          arrFilter.push(names[i]);
        }
      }
    }

    arr.push(names[i]);
  }
  return arrFilter;
}

module.exports = {
  renameFiles
};
