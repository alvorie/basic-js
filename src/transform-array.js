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
 */
function transform(arr) {
  if (!(arr instanceof Array)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }

  const ans = [];
  
  for (let i = 0; i < arr.length; i++) {
    const curr = arr[i];

    if (curr === '--double-next' && i + 1 < arr.length) {
      ans.push(arr[i + 1]);
    } else if (curr === '--double-prev' && ans.length > 0) {
      ans.push(ans[ans.length - 1]);
    } else if (curr === '--discard-prev' && ans.length > 0) {
      ans.pop();
    } else if (curr === '--discard-next' && i + 1 < arr.length) {
      i++;
    } else if (curr !== '--double-next' && curr !== '--double-prev' && curr !== '--discard-prev' && curr !== '--discard-next') {
      ans.push(curr);
    }
  }

  return ans;
}

module.exports = {
  transform
};
