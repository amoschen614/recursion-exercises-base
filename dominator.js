const { flattenTreeToArray } = require('./dom-util');
const _ = require('underscore');

const getElementById = function(root, id) {
  return _.filter(flattenTreeToArray(root), el => !!el.id && el.id === id)[0] || null;
};

const getElementsByClassName = function(root, className) {
  return _.filter(flattenTreeToArray(root), el => !!el.className && el.className.includes(className));
};

const getElementsByTagName = function(root, tagName) {
  return _.filter(flattenTreeToArray(root), el => el.tagName === tagName);
};

module.exports = {
  getElementById: getElementById,
  getElementsByClassName: getElementsByClassName,
  getElementsByTagName: getElementsByTagName
};
