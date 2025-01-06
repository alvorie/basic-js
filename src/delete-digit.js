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
  let stringNum = n.toString();

  for (let i = 0; i < stringNum.length - 1; i++) {
    if (+stringNum[i] < +stringNum[i + 1]) {
      return +stringNum.replace(stringNum[i], '');
    }
  }

  return +stringNum.slice(0, stringNum.length - 1);
}

module.exports = {
  deleteDigit
};
