const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain: [],

  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    if (arguments.length === 0) {
      this.chain.push('(  )');
    } else {
      this.chain.push(`( ${value} )`); 
    }
    return this;
  },
  removeLink(position) {
    if (Number(position) === NaN || Number(position) < 1 || Number(position) > this.chain.length) {
      throw new Error("You can't remove incorrect link!");
    }
    this.chain.splice(Number(position) - 1, 1);
    return this;
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    const res = this.chain.join("~~");
    this.chain = [];
    return res;
  }
};

module.exports = {
  chainMaker
};
