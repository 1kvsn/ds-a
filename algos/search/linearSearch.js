// Linear Search

function linearSearch(arr,v){
  for(let i=0; i<arr.length; i++) {
      if (arr[i] === v) {
         return i 
      }
  }
  return -1;
}

// Big-O of unsorted data

// O(1) best case scenario when we happen to find the array element initially 
// soon after the loop begins

// O(n) Average case

// O(n) worst case scenario when the element we're looking for
// is located at the end of the array.