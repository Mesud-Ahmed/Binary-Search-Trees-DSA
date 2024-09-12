class Node {
    constructor(data) {
      this.data = data;
      this.left = null;
      this.right = null;
    }
  }
  
  class Tree {
    constructor(arr) {
      const uniqueArr = [...new Set(arr)].sort((a, b) => a - b);
      this.root = this.buildTree(uniqueArr, 0, uniqueArr.length - 1);
    }
  
    buildTree(arr, start, end) {
      if (start > end) return null;
  
      let mid = Math.floor((start + end) / 2);
      let node = new Node(arr[mid]);
  
      node.left = this.buildTree(arr, start, mid - 1);
      node.right = this.buildTree(arr, mid + 1, end);
  
      return node;
    }
  
    insert(value) {
      this.root = this._insertNode(this.root, value);
    }
  
    _insertNode(node, value) {
      if (node === null) return new Node(value);
  
      if (value < node.data) {
        node.left = this._insertNode(node.left, value);
      } else if (value > node.data) {
        node.right = this._insertNode(node.right, value);
      }
  
      return node;
    }
  
    deleteItem(value) {
      this.root = this._deleteNode(this.root, value);
    }
  
    _deleteNode(node, value) {
      if (node === null) return null;
  
      if (value < node.data) {
        node.left = this._deleteNode(node.left, value);
      } else if (value > node.data) {
        node.right = this._deleteNode(node.right, value);
      } else {
        if (node.left === null && node.right === null) {
          return null;
        } else if (node.left === null) {
          return node.right;
        } else if (node.right === null) {
          return node.left;
        } else {
          let minValue = this._findMin(node.right);
          node.data = minValue.data;
          node.right = this._deleteNode(node.right, minValue.data);
        }
      }
  
      return node;
    }
  
    _findMin(node) {
      while (node.left !== null) {
        node = node.left;
      }
      return node;
    }
  
    find(value) {
      return this._findNode(this.root, value);
    }
  
    _findNode(node, value) {
      if (node === null || node.data === value) {
        return node;
      }
  
      if (value < node.data) {
        return this._findNode(node.left, value);
      } else {
        return this._findNode(node.right, value);
      }
    }
  
    levelOrder(callback) {
      if (typeof callback !== 'function') {
        throw new Error('Callback function is required');
      }
      
      if (this.root === null) return;
  
      const queue = [this.root];
      while (queue.length > 0) {
        const node = queue.shift();
        callback(node);
  
        if (node.left !== null) {
          queue.push(node.left);
        }
        if (node.right !== null) {
          queue.push(node.right);
        }
      }
    }
  
    inOrder(callback) {
      if (typeof callback !== 'function') {
        throw new Error('Callback function is required');
      }
      this._inOrderTraversal(this.root, callback);
    }
  
    _inOrderTraversal(node, callback) {
      if (node === null) return;
      this._inOrderTraversal(node.left, callback);
      callback(node);
      this._inOrderTraversal(node.right, callback);
    }
  
    preOrder(callback) {
      if (typeof callback !== 'function') {
        throw new Error('Callback function is required');
      }
      this._preOrderTraversal(this.root, callback);
    }
  
    _preOrderTraversal(node, callback) {
      if (node === null) return;
      callback(node);
      this._preOrderTraversal(node.left, callback);
      this._preOrderTraversal(node.right, callback);
    }
  
    postOrder(callback) {
      if (typeof callback !== 'function') {
        throw new Error('Callback function is required');
      }
      this._postOrderTraversal(this.root, callback);
    }
  
    _postOrderTraversal(node, callback) {
      if (node === null) return;
      this._postOrderTraversal(node.left, callback);
      this._postOrderTraversal(node.right, callback);
      callback(node);
    }
  
    height(node) {
      if (node === null) return -1;
      return Math.max(this.height(node.left), this.height(node.right)) + 1;
    }
  
    depth(node) {
      let current = this.root;
      let depth = 0;
      while (current !== null) {
        if (node.data < current.data) {
          current = current.left;
        } else if (node.data > current.data) {
          current = current.right;
        } else {
          return depth;
        }
        depth++;
      }
      return -1; // Node not found
    }
  
    isBalanced() {
      return this._isBalanced(this.root);
    }
  
    _isBalanced(node) {
      if (node === null) return true;
  
      const leftHeight = this.height(node.left);
      const rightHeight = this.height(node.right);
  
      if (Math.abs(leftHeight - rightHeight) > 1) {
        return false;
      }
  
      return this._isBalanced(node.left) && this._isBalanced(node.right);
    }
  
    rebalance() {
      const values = [];
      this.inOrder(node => values.push(node.data));
      this.root = this.buildTree(values, 0, values.length - 1);
    }
  
    prettyPrint(node = this.root, prefix = "", isLeft = true) {
      if (node === null) return;
  
      if (node.right !== null) {
        this.prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
      }
  
      console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
  
      if (node.left !== null) {
        this.prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
      }
    }
  }
  