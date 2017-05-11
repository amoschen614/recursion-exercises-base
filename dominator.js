const { flattenTreeToArray } = require('./dom-util');
const _ = require('underscore');

const getElementById = function(root, id) {
  return _.filter(flattenTreeToArray(root), el => {
    if (!!el.id && el.id === id) {
      return el;
    }
  })[0] || null;
};

const getElementsByClassName = function(root, className) {
  // Your code here
};

const getElementsByTagName = function(root, tagName) {
  // Your code here
};

module.exports = {
  getElementById: getElementById,
  getElementsByClassName: getElementsByClassName,
  getElementsByTagName: getElementsByTagName
};
