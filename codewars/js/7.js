// 1. An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

// isIsogram("Dermatoglyphics") == true
// isIsogram("aba") == false
// isIsogram("moOse") == false // -- ignore letter case

function isIsogram(str){
  if (!str) return true;
  let n = [];
	let count = 0;
	
  while(true && count < str.length) {
		if(!n.includes(str[count].toLowerCase())){
			n.push(str[count].toLowerCase());
			count++;
		} else {
			return false;
			break;
		}
  }
  return true;
}

// ---------------------------------------------------------

// Find nth Fibonacci number

function nthFibonacci(n) {
	let prev = 0;
	let current = 1;
	if (n === 0 || n === 1) return prev;
	if( n === 2) return current;
	let sum;
	for (let i=1; i<=n-1; i++) {
		sum = prev + current;
		prev = current;
		current = sum;
	}
	return console.log(sum)
}

nthFibonacci(0)
// ---------------------------------------------------------

// Given has an array of sales numbers, what is the index of the smallest index element for which the sums of all elements to the left and to the right are equal. The array may not be reordered.

// For example, given the array sales = [1, 2, 3, 4, 6],we see that 1+2+3=6，Using zero based indexing,sales[3] = 4 is the value sought.The index is 3.

var arr = [-7, 1, 5, 2, -4, 3, 0]
var arr2 =  [1, 2, 3, 4, 6]

function equi(arr) {
	let total = arr.reduce((acc, elm) => acc + elm, 0); 
	// console.log(total)
	let leftSum = 0;
	for (let i=0; i<=arr.length; i++) {
		total = total - arr[i]

		if(leftSum === total) {
			return console.log(i);
		}
		leftSum = leftSum + arr[i]
	}
	return -1;
}

equi(arr);
equi(arr2);

// ---------------------------------------------------------
// ---------------------------------------------------------
// ---------------------------------------------------------
// ---------------------------------------------------------
// ---------------------------------------------------------
// ---------------------------------------------------------
// ---------------------------------------------------------
// ---------------------------------------------------------
// ---------------------------------------------------------
// ---------------------------------------------------------
// ---------------------------------------------------------
// ---------------------------------------------------------
// ---------------------------------------------------------
// ---------------------------------------------------------
// ---------------------------------------------------------
// ---------------------------------------------------------
// ---------------------------------------------------------
// ---------------------------------------------------------
// ---------------------------------------------------------
// ---------------------------------------------------------
// ---------------------------------------------------------
// ---------------------------------------------------------
// ---------------------------------------------------------
// ---------------------------------------------------------
