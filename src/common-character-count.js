const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let dict1 = new Map();
  let dict2 = new Map();
  let ans = 0;

  for (let element of s1) {
    dict1.set(element, (dict1.get(element) || 0) + 1);
  }
  for (let element of s2) {
    dict2.set(element, (dict2.get(element) || 0) + 1);
  }

  for (key of dict1.keys()) {
    ans += Math.min(dict1.get(key) || 0, dict2.get(key) || 0);
  }

  return ans;
}

module.exports = {
  getCommonCharacterCount
};
