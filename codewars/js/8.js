// Capitalize the first letters of each word in a string.

var str = "How can mirrors be real if our eyes aren't real";

String.prototype.toJadenCase = function () {
  // console.log(Array.from(this).join(""))
	let arr = Array.from(this).join("");
  let result =  arr.split(" ").map(elm => {
    return elm.replace(elm.charAt(0), elm.charAt(0).toUpperCase())
  })
	return console.log(result.join(" "));
};

str.toJadenCase()

// ---------------------------------------------------------

function isPalindrome(str) {
	let input = str.toLowerCase();
	let reverse = str.split("").reverse().join("");
	return console.log(input === reverse);
}

isPalindrome("neveroddoreven")