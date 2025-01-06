const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let ans = '';
  str = String(str);
  let repeatTimes = !options.repeatTimes ? 1 : +options.repeatTimes;
  let additionRepeatTimes = !options.additionRepeatTimes ? 1 : +options.additionRepeatTimes;
  let addition = options.addition !== undefined? String(options.addition) : '';
  let additionSeparator = options.additionSeparator? String(options.additionSeparator) : "|";
  let separator = options.separator ? options.separator.toString() : "+";
  for (let i = 0; i < repeatTimes; i++) {
    ans += str;
    for (let j = 0; j < additionRepeatTimes; j++) {
      ans += addition;
      if (additionRepeatTimes - 1 !== j) {
        ans += additionSeparator;
      }
    }
    if (repeatTimes - 1 !== i) {
      ans += separator;
    }
  }
  return ans;
}

module.exports = {
  repeater
};
