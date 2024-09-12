# Binary Search Tree (BST) Implementation

## Overview

This project provides a JavaScript implementation of a Binary Search Tree (BST) with various functionalities, including node insertion, deletion, traversal methods, height and depth calculations, balance checking, and rebalancing. The tree structure is designed to support efficient searching, insertion, and deletion operations.

## Classes

### `Node`

Represents a node in the binary search tree.

#### Constructor

- `Node(data)`
  - **Parameters**:
    - `data`: The value stored in the node.

#### Properties

- `data`: The value stored in the node.
- `left`: Reference to the left child node.
- `right`: Reference to the right child node.

### `Tree`

Represents the binary search tree.

#### Constructor

- `Tree(arr)`
  - **Parameters**:
    - `arr`: An array of values to initialize the tree. Duplicates are removed, and the array is sorted before building the tree.

#### Methods

- **`insert(value)`**
  - Inserts a new value into the tree.

- **`deleteItem(value)`**
  - Deletes a node with the specified value from the tree.

- **`find(value)`**
  - Returns the node with the specified value, or `null` if not found.

- **`levelOrder(callback)`**
  - Performs a level-order (breadth-first) traversal and applies the callback function to each node.
  - **Parameters**:
    - `callback`: Function to be called on each node.

- **`inOrder(callback)`**
  - Performs an in-order (depth-first) traversal and applies the callback function to each node.
  - **Parameters**:
    - `callback`: Function to be called on each node.

- **`preOrder(callback)`**
  - Performs a pre-order (depth-first) traversal and applies the callback function to each node.
  - **Parameters**:
    - `callback`: Function to be called on each node.

- **`postOrder(callback)`**
  - Performs a post-order (depth-first) traversal and applies the callback function to each node.
  - **Parameters**:
    - `callback`: Function to be called on each node.

- **`height(node)`**
  - Returns the height of the specified node.
  - **Parameters**:
    - `node`: The node whose height is to be calculated.

- **`depth(node)`**
  - Returns the depth of the specified node.
  - **Parameters**:
    - `node`: The node whose depth is to be calculated.

- **`isBalanced()`**
  - Checks if the tree is balanced. A balanced tree is one where the difference between heights of the left and right subtrees of every node is no more than 1.

- **`rebalance()`**
  - Rebalances the tree if it’s unbalanced. It re-builds the tree from a sorted array of node values.

- **`prettyPrint(node = this.root, prefix = "", isLeft = true)`**
  - Prints the tree structure to the console in a readable format.
  - **Parameters**:
    - `node`: The root node of the subtree to print (defaults to the entire tree).
    - `prefix`: String used for formatting the tree output.
    - `isLeft`: Boolean indicating if the current node is a left child.
