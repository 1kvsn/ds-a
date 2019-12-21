class Node {
	constructor(val) {
		this.val = val;
		this.next = null;
		this.prev = null
	}
}

class DoublyLinkedList {
	//initialization
	constructor() {
		this.head = null;
		this.tail = null;
		this.length = 0;
	}

	push(val) {
		var newNode = new Node(val);
		if (!this.head) {
			this.head = newNode;
			this.tail = newNode;
		} else {
			// link newNode with current tail.
			this.tail.next = newNode;
			// link newNode with previous tail
			newNode.prev = this.tail;
			// set the newNode as the new Tail;
			this.tail = newNode;
		}
		this.length++;
		return this;
	}

	pop() {
		if (!this.head) return null;
		var poppedNode = this.tail;
		//condition to handle removal of last item from list
		if (this.length === 1) {
			this.head = null;
			this.tail = null;
		} else {
			this.tail = poppedNode.prev;
			this.tail.next = null;
			//sever the ties of removed node completely
			poppedNode.prev = null;
		}
		this.length--;
		return poppedNode;
	}
	//remove from beginning
	shift() {
		if (!this.head) return null;
		var oldHead = this.head;
		if (this.length === 1) {
			this.head = null;
			this.tail = null;
		} else {
			this.head = oldHead.next;
			this.head.prev = null;
			oldHead.next = null;
		}
		this.length--;
		return oldHead;
	}

	unshift(val) {
		var newNode = new Node(val);
		if (!this.head) {
			this.head = newNode;
			this.tail = newNode;
		} else {
			var oldHead = this.head;
			oldHead.prev = newNode;
			newNode.next = oldHead;
			this.head = newNode;
		}
		this.length++;
		return this;
	}

	get(index) {
		if (index === undefined || index < 0 || index >= this.length) return null;
		if (index <= this.length / 2) {
			console.log('beginning...');
			var count = 0;
			var currentNode = this.head;
			while (count !== index) {
				currentNode = currentNode.next;
				count++;
			}
		} else {
			console.log('end...');
			var count = this.length - 1;
			var currentNode = this.tail;
			while (count !== index) {
				currentNode = currentNode.prev;
				count--;
			}
		}
		return currentNode;
	}

	set(val, index) {
		var foundNode = this.get(index);
		if (!foundNode) return null;
		if (foundNode) {
			foundNode.val = val;
			return true;
		}
	}

	insert(index, val) {
		if (index < 0 || index > this.length) return false;
		if (index === 0) return !!this.unshift(val);
		if (index === this.length) return !!this.push(val);
		var newNode = new Node(val);
		var prevNode = this.get(index - 1);
		if (prevNode) {
			newNode.next = prevNode.next;
			prevNode.next = newNode;
			newNode.prev = prevNode;
			newNode.next.prev = newNode;
		}
		this.length++;
		return true;
	}

	remove(index) {
		if (index < 0 || index >= this.length) return null;
		if (index === 0) return this.shift();
		if (index === this.length - 1) return this.pop();
		var removedNode = this.get(index);
		if (removedNode) {
			var prevNode = removedNode.prev;
			var nextNode = removedNode.next;
			prevNode.next = nextNode;
			nextNode.prev = prevNode;
			removedNode.prev = null;
			removedNode.next = null;
		}
		this.length--;
		return removedNode;
	}
	reverse() {
		if (this.length <= 1) return null;
		var node = this.head;
		this.head = this.tail;
		this.tail = node;
		var next;
		for (var i = 0; i < this.length; i++) {
			next = node.next;
			node.next = node.prev;
			node.prev = next;
			node = next;
		}
		return this;
	}
}
var list = new DoublyLinkedList();
list.push(99);
list.push(100);
list.push(101);
	// list.push(102);
	// list.push(103);
	// list.push(104);
	// list.push(105);
	// list.push(106);

