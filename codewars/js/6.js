// Find duplicates in a string (case-insensitive) and return the number of letters present more than once.

function duplicateCount(text){
	let obj = {}
	for (const char of text.toLowerCase()) {
		if (!obj[char]) {
			obj[char] = 1
		} else {
			obj[char]++
		}
	}
	return Object.values(obj).filter(elm => elm > 1).length
}


// duplicateCount("aabbcde")
// duplicateCount("aabBcde")
// duplicateCount("indivisibility")
// duplicateCount("aA11")

// ---------------------------------------------------------
// Detect Pangram (https://www.codewars.com/kata/545cedaa9943f7fe7b000048)

// A pangram is a sentence that contains every single letter of the alphabet at least once. (case is irrelevant).

// Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.

function isPangram(string){
	const alphabets = 'abcdefghijklmnopqrstuvwxyz';
	const str = string.toLowerCase().split(' ').join('');

	// looping over alphabets
	for (let i = 0; i<alphabets.length-1; i++) {
			// check if alphabet is present in str
			if (!str.includes(alphabets[i])) {
					return false;
			}
	}
	return true;
}

// ---------------------------------------------------------
// Replace With Alphabet Position
// https://www.codewars.com/kata/546f922b54af40e1e90001da

function alphabetPosition(text) {
	const alphabets = 'abcdefghijklmnopqrstuvwxyz';
	const textArr = text.toLowerCase().split(" ").join("").split("");
	const result = [];

	textArr.forEach((elm,i) => {
			if (isValidLetter(elm)) {
					result.push(alphabets.indexOf(elm) + 1)
			}
	})

	return result.join(" ")
}

function isValidLetter(str) {     
	if (str.match(/[a-z]/i)) { 
				return true;     
	}     
	return false;   
}

// alphabetPosition("The sunset sets at twelve o' clock.")
// alphabetPosition("The narwhal bacons at midnight.")

// ---------------------------------------------------------
// Bouncing Balls
// https://www.codewars.com/kata/5544c7a5cb454edb3c000047

function bouncingBall(h,  bounce,  window) {
	if( !(h > 0) || bounce < 0 || bounce >= 1 || !(window < h) ) return -1;

	let count = 0;

	while (h>window) {
			// falling increment
			count = count + 1;
			h =  h * bounce;
			// bounce increment
			count = count + 1
	}
	return count - 1;
}

// bouncingBall(3.0, 0.66, 1.5) // 3
// bouncingBall(30.0, 0.66, 1.5) // 15
// ---------------------------------------------------------
// Count characters in your string
// https://www.codewars.com/kata/52efefcbcdf57161d4000091

function count (string) {  
	if(!string) return {};
	const result = {};

	for(let i=0; i<string.length; i++) {
		if (!result[string[i]]) {
			result[string[i]] =  1;
		} else {
				result[string[i]]++;
		}
	}
 return result;
}

// count("aba"), { a: 2, b: 1 }
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
// ---------------------------------------------------------
// ---------------------------------------------------------
// ---------------------------------------------------------

