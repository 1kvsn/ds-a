	// Trees

	// Parent-Child relationship

	// In Trees, we've ONLY ONE ROOT (one entry point).

	// In Trees, the nodes only points towards their children.

	// In Trees, Node does NOT point to their parent or to other nodes.

	// Terminology

	// - Root  -> top node in a tree
	// - Child -> a node directly connected to another node when moving away from the root
	// - Leaf  -> a node with no children
	// - Edge  -> The connection between one node and another

	// ------------------------------------------------------------

	// Use of Trees

	// HTML DOM
	// Abstract Syntax Tree (AST)
	// Decision Trees
	// Folders in Operating Systems
	// JSON

	// ------------------------------------------------------------

// Tree Traversal

// 2 ways of tree traversal:-

// Breadth-first Search
// Depth-first Search :
				// 1. DFS-PreOrder
				// 2. DFS-PostOrder :-
								// 1. First, we check if the current node has left or right
								// 2. If left node found, check if it has left or right
								// 3. Finish checking all the lefts and right nodes of current node until there isn't.
								// 4. Only when there isn't any left and right, the node is visited/pushed to output array
								// 5. Only when both the left and right of a node is visited/pushed to output array, the node itself is visited/pushed
								// 6. So, basically it means we check for and visit all children before we visit/output the parent node
								// 7. Becoz of this, the root node is the last output
				// 3. DFS-InOrder :-

// -----------------------------------------------------------------------

// Big-O of Tree Traversal

// It is NOT about time. We visit each node once. So, the time used by both methods is almost same.
// It is about space.

// In BFS, we're using a queue to store the nodes. This could use lots of space incase the tree has considerable height/depth (many levels of children-children-children)

// -------------------------------------------------------------
