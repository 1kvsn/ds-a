	// Queue

	// Queue has FIFO data structure

	// used for:
	// background tasks
	// uploading resources
	// Printing/Task processing

	// Enqueue - adding to the queue (similar to push)
	// Dequeue - removing from the queue ( similar to shift)

	// Big O

	// Insertion - O(1)
	// Removal   - O(1)
	// Searching - O(N)
	// Access    - O(N)

	// --------------------------------------------------------

	class Node {
		constructor(value) {
			this.value = value;
			this.next = null;
		}
	}

	class Queue {
		constructor() {
			this.first = null;
			this.last = null;
			this.size = 0;
		}
		enqueue(val) {
			var newNode = new Node(val);
			if (!this.first) {
				this.first = newNode;
				this.last = newNode;
			} else {
				this.last.next = newNode;
				this.last = newNode;
			}
			return ++this.size;
		}
		// exactly same as pop() in Stack
		dequeue() {
			if (!this.first) return null;
			var temp = this.first;
			if (this.first === this.last) {
				this.last = null;
			}
			// take second item from the beginning and make it first now
			this.first = this.first.next;
			this.size--;
			return temp.value;
		}
	}

	var q = new Queue();

	// --------------------------------------------------------


