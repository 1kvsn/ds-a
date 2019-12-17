// what is a node?
// piece of data => val
// reference to next node => next

class Node {
	constructor(val) {
		this.val = val;
		this.next = null;
	}
}

class SinglyLinkedList {
	//initialization
	constructor() {
		this.head = null;
		this.tail = null;
		this.length = 0;
	}

	push(val) {
		// this function should accept a value
		// create a new node using the value passed to the function
		// if there is no head property on the list, set the head and the tail to be the newly created node.
		// Otherwise set the next property on the tail to be the new node and set the tail property on the list to be the newly created node.
		// increment the length by one.
		// return the linked list

		var newNode = new Node(val);
		if (!this.head) {
			this.head = newNode;
			this.tail = this.head;
		} else {
			this.tail.next = newNode;
			this.tail = newNode;

		}
		this.length++;
		return this;
	}

	pop() {
		// if there are no nodes in the list, return null;
		// loop through the list until you reach the tail
		// remember the value of the tail in a variable
		// Set the next property of 2nd last node to null. This severs the tie to tail node.
		// set the tail to be the 2nd last node.
		// decrement the length
		// return the value of the node removed

		if (!this.head) return null;
		var current = this.head;
		var newTail = current;
		while (current.next) {
			//newTail is always lagging behind. It is set to what current was.
			newTail = current;
			// current is set to next node until there is nothing on next node.
			current = current.next;
		}
		//setting tail to be 2nd last node
		this.tail = newTail;
		// sever tie with last node so it can be removed;
		this.tail.next = null;
		this.length--;
		// EDGE CASE: when length = 0, handle head and tail clearing
		if (this.length === 0) {
			this.head = null;
			this.tail = null;
		}
		//return current as it contains value of node removed
		return current;
	}

	shift() {
		//if there are no nodes, return null;
		// store the current head property in a variable
		// set the head property to be the current head's next property
		//decrement the length by 1
		// return the value of node removed

		if (!this.head) return null;
		var currentHead = this.head;
		this.head = currentHead.next;
		this.length--;
		// EDGE CASE: when length = 0, handle tail clearing
		if (this.length === 0) {
			this.tail = null;
		}
		return currentHead;
	}

	unshift(val) {
		// function should accept a value
		// create a new node using the value passed.
		// if there is no head property on the list, set the head and the tail to be the newly created node.
		// Otherwise, set the newly created node's next property to be the current head property on the list.
		// set the head property on the list to be that newly created node.
		// increment length by one
		// return the linked list
		var newNode = new Node(val);
		//EDGE CASE for handling empty list
		if (!this.head) {
			this.head = newNode;
			this.tail = this.head;
		} else {
			newNode.next = this.head;
			this.head = newNode;
		}
		this.length++;
		return this;
	}

	get(index) {
		//should accept an index
		//if index is less then zero or greater than or equal to the length of the list, return null
		if (index >= this.length || index < 0) return null;
		var counter = 0;
		var current = this.head;
		while (counter !== index) {
			current = current.next;
			counter++;
		}
		return current;
	}

	set(index, val) {
		// function should accept a value and index
		// use get function to find the specific node.
		// if node is not found, return false.
		// if node is found, set the value of that node to be the value passed to the function and return true
		var foundNode = this.get(index);
		if (foundNode) {
			foundNode.val = val;
			return true;
		} else {
			return false;
		}
	}

	insert(index, val) {
		//if index is less then zero or greater than the length, return false.
		// if the index is the same as the length, push a new node to the end of the list.
		// if the index is zero, unshift a new node to the start of the list.
		// otherwise, using the get method, access the node at the index - 1
		// set the next propert on that node to be the previous next
		// increment the length
		// return true
		if (index < 0 || index > this.length) return false;
		if (index === this.length) return !!this.push(val);
		if (index === 0) {
			//double !! coerces the value into boolean
			return !!this.unshift(val);
		} else {
			var newNode = new Node(val);
			var prev = this.get(index - 1);
			var temp = prev.next;
			prev.next = newNode;
			newNode.next = temp;
			this.length++;
			return true;
		}
	}

	remove(index) {
		// if the index is less than zero or greater than or equal to the length, return null;
		// if index = 0, use shift method.
		// if the index is the same as length -1, use pop.
		// otherwise, using the get method, access the node at the index-1;
		//set the next property on that node to be the next of the next node
		// decrement the length
		// return the value of the node removed.
		if (index < 0 || index >= this.length) return null;
		if (index === 0) return this.shift();
		if (index === this.length - 1) return this.pop();

		var prev = this.get(index - 1);
		var removed = prev.next;
		prev.next = removed.next;
		this.length--;
		return removed;
	}

	reverse() {
		//swap head and tail
		var node = this.head;
		this.head = this.tail;
		this.tail = node;
		var next = null;
		var prev = null;
		for (var i = 0; i < this.length; i++) {
			next = node.next;
			node.next = prev;
			prev = node;
			node = next;
		}
		return this;
	}
	
	print() {
		var arr = [];
		var current = this.head
		while (current) {
			arr.push(current.val)
			current = current.next
		}
		console.log(arr);
	}
}

var list = new SinglyLinkedList();
list.push(100);
list.push(200);
list.push(300);
list.push(400);

	// HELLO -> GOODBYE -> !
	// 						c;
	// 	nt;





