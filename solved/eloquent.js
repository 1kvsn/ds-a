// Make ChessBoard (eloquent lesson 2)

function printChessboard(size) {
	let line = " ";
	// handles the line
	for(let counterOne = 1; counterOne<=size; counterOne = counterOne + 1) {
			
			// handles the characters on a line.
			for(let counterTwo = 1; counterTwo<=size; counterTwo = counterTwo + 1) {
					if((counterOne + counterTwo) % 2 === 0) {
							line = line + "#"
					} else {
							line = line + " ";
					}
			}
			// once a line is built, changes into new line
			line = line + "\n";
	}
	console.log(line)
}

printChessboard(8)

// ---------------------------------------------------------

// Make range function (eloquent)
function range(start, end, step = start <= end ? 1 : -1) {
	let result = [];

	for(let number = start; step >= 0 ? number <= end : number >= end; number = number + step) {
			result.push(number)
			
	}
	return result;
}

range(10, 1, -3) // [ 10, 7, 4, 1 ]

// -------------------------------------------------------

// Reverse an array in-place
function reverseArrayInPlace(array) {

	let len = array.length;

	for (let i = 0; i < Math.floor(len/2); i++) {
			let swap = array[i];
			array[i] = array[len-1-i];
			array[len-1-i] = swap;
	}
	return array;
}

reverseArrayInPlace([ 10, 7, 4, 1, 5 ]);

// ------------------------------------------------------
// array flattening using reduce and concat
let arrays = [[1, 2, 3], [4, 5], [6]];

function flatten(arr) {
	return arr.reduce((acc, val) => acc.concat(val))
}

flatten(arrays)

// ------------------------------------------------------
// custom loop ( not working)
function customLoop(value,testFunc,updaterFunc,bodyFunc) {

	for ( let i=value; ; i = updaterFunc(value)) {

		// Each iteration, runs the test function on the current loop value and stops if that returns false
		if(!testFunc(value)) {
			break;
		}
		// calls the body function, giving it the current value.
		bodyFunc(i);
	}
}

// customLoop(3, n => n > 0, n => n - 1, console.log);

// ------------------------------------------------------
// everything

// Analogous to the some method, arrays also have an every method. This one returns true when the given function returns true for every element in the array. In a way, some is a version of the || operator that acts on arrays, and every is like the && operator.

// Implement every as a function that takes an array and a predicate function as parameters. Write two versions, one using a loop and one using the some method.

// using regular for loop
function every(array, test) {
	let result = true;
	for (let item of array) {
		if(!test(item)) {
			result = false;
			break;
		}
	}
  	return result;
}

// using some method
function every(array, test) {
  return !array.some(item => test(item) === false)
}

// console.log(every([1, 3, 5], n => n < 10));  // → true
// console.log(every([2, 4, 16], n => n < 10)); // → false
// console.log(every([], n => n < 10));         // → true
// ------------------------------------------------------
// ------------------------------------------------------
// ------------------------------------------------------
// ------------------------------------------------------
// ------------------------------------------------------
// ------------------------------------------------------
// ------------------------------------------------------
// ------------------------------------------------------
// ------------------------------------------------------
// ------------------------------------------------------
// ------------------------------------------------------
// ------------------------------------------------------
// ------------------------------------------------------
// ------------------------------------------------------
// ------------------------------------------------------
// ------------------------------------------------------
// ------------------------------------------------------
// ------------------------------------------------------
// ------------------------------------------------------
// ------------------------------------------------------
// ------------------------------------------------------
// ------------------------------------------------------
// ------------------------------------------------------
// ------------------------------------------------------
// ------------------------------------------------------
