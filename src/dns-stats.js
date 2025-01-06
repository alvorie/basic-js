const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let appearances = new Map();
  for (let domain of domains) {
    let dns =  domain.split('.').reverse();
    let curr = '';
    for (let stri of dns) {
      curr = `${curr}.${stri}`;
      appearances.set(curr, (appearances.get(curr) || 0) + 1);
    }
  }
  return Object.fromEntries(appearances);
}
module.exports = {
  getDNSStats
};
