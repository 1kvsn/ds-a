// Problem: Find the occurence of a substring inside a string and print number of occurences.

// pseudocode

// loop over the longer string
// loop over the shorter string
// If the characters don't match, break out of the inner loop
// If the characters do match, keep going
// If you complete the inner loop and find a match, increment the count of matches
// return the count


function naiveStringSearch(long, short) {
  let count = 0;

  for(let i = 0; i<long.length; i++) {
    for(let j = 0; j<short.length; j++) {
      console.log(short[j], long[i+j]);

      if(short[j] !== long[i+j]) {
        console.log('BREAK!')
        break;
      }

      if(j === short.length - 1) {
        console.log('FOUND ONE!')
        count++;
      }
    }
  }
  return count;
}

naiveStringSearch('lorel loled', 'lol') // 1