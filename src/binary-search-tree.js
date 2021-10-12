const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
module.exports = class BinarySearchTree {

  constructor(node = null) {
    this.node = node;
  }

  root() {
    return this.node;
  }

  insertNode(node, newNode) {
    if (newNode.data < node.data) {
      if (node.left === null) node.left = newNode;
      else this.insertNode(node.left, newNode);
    } else {
        if (node.right === null) node.right = newNode;
        else this.insertNode(node.right, newNode);
      }
  }

  add(data) {
    const newNode = new Node(data);
    if (this.node === null) this.node = newNode;
    else this.insertNode(this.node, newNode);
  }

  has(data) {
    return this.find(data, this.node) !== null;
  }

  find(data, node = this.node) {
    if (node === null) return null;
    else if (data < node.data) return this.find(data, node.left);
    else if (data > node.data) return this.find(data, node.right);
    else return node;
  }

  minNode(node) {
    if (node.left === null) return node;
    else return this.minNode(node.left);
  }

  removeNode(node, data) {
    if (node === null) return null;
    else if (data < node.data) {
      node.left = this.removeNode(node.left, data);
      return node;
    } else if (data > node.data) {
        node.right = this.removeNode(node.right, data);
        return node;
    } else {
        if (node.left === null && node.right === null) {
            node = null;
            return node;
        }
        if (node.left === null) {
            node = node.right;
            return node;
        } else if (node.right === null) {
            node = node.left;
            return node;
        }
        const newNode = this.minNode(node.right);
        node.data = newNode.data;
        node.right = this.removeNode(node.right, newNode.data);
        return node;
      }
  }

  remove(data) {
    this.node = this.removeNode(this.node, data);
  }

  min(node = this.node) {
    if (node.left === null) return node.data;
    else return this.min(node.left);
  }

  max(node = this.node) {
    if (node.right === null) return node.data;
    else return this.max(node.right);
  }
}