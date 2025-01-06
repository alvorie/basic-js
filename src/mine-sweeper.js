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
  const rows = matrix.length;
  const cols = matrix[0].length;
  let minesweeperMap = Array(matrix.length).fill().map(()=>Array(matrix[0].length).fill());
  let coords = [[1, 0], [1, 1], [0, 1], [0, -1], [-1, 0], [-1, 1], [1, -1], [-1, -1]];

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      let mines = 0;
      for (let coord of coords) {
        let id;
        let jd;
        id = i + coord[0];
        jd = j + coord[1];
        if (id >= 0 && id < rows && jd < cols && jd >= 0 && matrix[id][jd] === true) {
          mines += 1;
        }
      }
      minesweeperMap[i][j] = mines;
    }
  }

  return minesweeperMap;
}

module.exports = {
  minesweeper
};
