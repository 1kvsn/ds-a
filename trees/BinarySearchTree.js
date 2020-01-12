// Binary Tree

// Root has max 2 nodes and each node can have max 2 children or no children.

// ------------------------------------------------------------

// Binary Search Tree (BST)

// Every piece of data is stored in a specific order.

// BST Rules:
// Every parent node has at most TWO children.
// Every node to the left of a parent node is ALWAYS LESS then the parent.
// Every node to the right of a parent node is ALWAYS GREATER than the parent.

// ------------------------------------------------------------

// Big O of BST

// Insertion - O(log n) # which is pretty good
// Searching - O(log n)

// ------------------------------------------------------------


class Node {
	constructor(value) {
		this.value = value;
		this.left = null;
		this.right = null;
	}
}

class BinarySearchTree {
	constructor() {
		this.root = null;
	}
	
	insert(value) {
		var newNode = new Node(value);
		if (this.root === null) {
			this.root = newNode;
			return this;
		}
		// else we begin from root similar to how we begin from head in LinkedList
		var current = this.root;
		while (true) {
			if (value === current.value) return undefined;
			if (value < current.value) {
				if (current.left === null) {
					current.left = newNode;
					return this;
				}
				// else if there is a node on the LEFT, switch to it and while loop will repeat process again
				current = current.left;
			} else {
				if (current.right === null) {
					current.right = newNode;
					return this;
				}
				// else if there is a node on the RIGHT, switch to it and while loop will repeat process again
				current = current.right;
			}
		}
	}

	find(value) {
		if (this.root === null) return false;
		var current = this.root,
			found = false;
		// while there is something to loopover and until we've found the value
		while (current && !found) {
			if (value < current.value) {
				current = current.left;
			} else if (value > current.value) {
				current = current.right;
			} else {
				// runs when both the above conditions are false i.e when value is found
				found = true;
			}
		}
		if (!found) return undefined;
		return current;
	}

	contains(value) {
		if (this.root === null) return false;
		var current = this.root,
			found = false;
		while (current && !found) {
			if (value < current.value) {
				current = current.left;
			} else if (value > current.value) {
				current = current.right;
			} else {
				return true;
			}
		}
		return false;
	}

	BFS() {
		var node = this.root,
			data = [],
			queue = [];
		queue.push(node);
		while (queue.length) {
			node = queue.shift();
			data.push(node.value); // the value is pushed so it is easier to see the output, otherwise push node only
			// since this is a binary tree, we're looking for left and right only. For othe types of trees, we could've added loop or recursion 
			if (node.left) queue.push(node.left);
			if (node.right) queue.push(node.right);
		}
		return data;
	}

	DFSPreOrder() {
		var data = [];
		function traverse(node) {
			// value is pushed to easier output read
			data.push(node.value);
			if (node.left) traverse(node.left);
			if (node.right) traverse(node.right);
		}
		// start traversing from beginning of tree
		traverse(this.root);
		return data;
	}

	DFSPostOrder() {
		var data = [];
		function traverse(node) {
			if (node.left) traverse(node.left);
			if (node.right) traverse(node.right);
			data.push(node.value); // just this line position changed from PreOrder
		}
		traverse(this.root);
		return data;
	}

	DFSInOrder() {
		var data = [];
		function traverse(node) {
			if (node.left) traverse(node.left);
			data.push(node.value); // just this line position changed from PostOrder
			if (node.right) traverse(node.right);
		}
		traverse(this.root);
		return data;
	}
}

//      10
//   5     13
// 2  7  11  16

var tree = new BinarySearchTree();
tree.insert(10)
tree.insert(5)
tree.insert(13)
tree.insert(11)
tree.insert(2)
tree.insert(16)
tree.insert(7)

tree.DFSPreOrder();	 // [10, 5, 2, 7, 13, 11, 16]
tree.DFSPostOrder(); // [2, 7, 5, 11, 16, 13, 10]
tree.DFSInOrder();  //  [2, 5, 7, 10, 11, 13, 16]



