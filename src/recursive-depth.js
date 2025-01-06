const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    let max = 1;

    for (let element of arr) {
      if (element instanceof Array) {
        let currDepth =  this.calculateDepth(element) + 1;
        max = Math.max(max, currDepth);
      }
    }
    return max;
  }
}

module.exports = {
  DepthCalculator
};
