const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {

  let result = [];
  for(i = 0; i < matrix.length; i++){
    result[i] = [];
    for(j = 0; j < matrix[0].length; j++){
      result[i][j] = 0;
    }
  }

  for(i = 0; i < matrix.length; i++){
    for(j = 0; j < matrix[0].length; j++){
      for(y = -1; y < 2; y++){
        for(x = -1; x < 2; x++){
          if (i + y < 0 || j + x < 0 || i + y >= matrix.length || j + x >= matrix[0].length) continue;
          console.log(matrix[i + y][j + x]);
          if(matrix[i + y][j + x] === true){
            result[i][j] += 1;
          }
        }
      }
      if(matrix[i][j] === true){
        result[i][j] -= 1;
      }
    }
  }
  return result;
}

module.exports = {
  minesweeper
};
