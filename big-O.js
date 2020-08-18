// Big-O 

// Why used? =>  To analyze performance of an algorithm, we use Big-O notation.

// Time Complexity

// 1. constants don't matter

// O(2n) => O(n)
// O(500) => O(1)
// O(13n^2) => O(n^2) => means n squared

// 2. Smaller terms also don't matter

// O(n + 10) => O(n)
// O(100n + 50) => O(n)
// O(n^2 + 5n + 8) => O(n)

// Simple Rules for Time Complexity

// Arithmetic Operations are constant
// Variable Assignments are constant
// Accessing elements in an array(by index) or object(by key) is constant
// In a loop, the complexity is the length of the loop times the complexity of whatever happens inside the loop.

// Simple rules for Space Complexity

// Most primitives (booleans, numbers, undefined, null) are constant space.
// Strings require O(n) space where n is length of string.
// Reference types are generally O(n) where n is length (for arrays) or the number of keys (for objects).