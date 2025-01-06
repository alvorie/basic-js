const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let newArr = arr.filter(height => height !== -1).sort((a, b) => a - b);;

  let sortedArr = [];
  let heightIndex = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === -1) {
      sortedArr.push(-1);
    } else {
      sortedArr.push(newArr[heightIndex]);
      heightIndex++;
    }
  }

  return sortedArr;
}

module.exports = {
  sortByHeight
};
