	// What is a Stack?

	// A LIFO data structure.

	// The last element added to the stack will be the first element removed from the stack

	// There are more than one way of implementing a stack

	// Stack implementation with an array

	// We can use the push() and pop() method to implement the LIFO structure. Shift() and Unshift() methods would be very costly because of reindexing.

	// Stacks are used for:
	// 1. the function invocations (the call stack)
	// 2. for operations like undo/redo
	// 3. for routing (remember pages we've visited and go back/forward)

	// ------------------------------------------------------

// Big O of Stacks

// Insertion - O(1)
// Removal   - O(1)
// Searching - O(N) # because we've to traverse through the whole array using .next and reach till the needed node
// Access    - O(N) # same explanation as above

	// ------------------------------------------------------

	class Node {
		constructor(value) {
			this.value = value;
			this.next = null;
		}
	}

	class Stack {
		constructor() {
			this.first = null;
			this.last = null;
			this.size = 0;
		}
		push(val) {
			var newNode = new Node(val);
			if (!this.first) {
				this.first = newNode;
				this.last = newNode;
			} else {
				var temp = this.first;
				this.first = newNode;
				this.first.next = temp;
			}
			return ++this.size;
		}
		pop() {
			// if nothing in the stack to pop, return null
			if (!this.first) return null;
			// save the first on temp variable to return it in the end
			var temp = this.first;
			// if there is only one node
			if (this.first === this.last) {
				this.last = null;
			} else {
				this.first = this.first.next;
			}
			this.size--;
			return temp.value;
		}
	}

	var stack = new Stack()
