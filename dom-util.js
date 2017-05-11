
const visitAllNodes = function(node, callback) {
  // Hint: read about DOM nodes and node methods here: https://developer.mozilla.org/en-US/docs/Web/API/Node
  callback(node);
  for (let i = 0; i < node.childNodes.length; i++) {
    visitAllNodes(node.childNodes[i], callback);
  }
};

const flattenTreeToArray = function(node) {
  // Hint: Use visitAllNodes()
  let result = [];
  visitAllNodes(node, nextNode => result.push(nextNode));
  return result;
};

module.exports = {
  visitAllNodes: visitAllNodes,
  flattenTreeToArray: flattenTreeToArray
};