// Binary Search

// works on sorted data only
// works on the principle of Divide and Conquer

function binarySearch(sortedArray, value){
  let start = 0;
  let end = sortedArray.length-1;
  let middle = Math.floor((start + end) / 2);

  while (sortedArray[middle] !== value && start <= end) {
    console.log(start, middle, end);

    if (value < sortedArray[middle]) {
      end = middle - 1;
    } else {
      start = middle + 1;
    }
    
    // get new middle
    middle = Math.floor((start + end) / 2);
  }

  if(sortedArray[middle] === value) {
    return middle;
  }
  return -1;
}

binarySearch([2,5,6,9,13,15,28,30,31,34,45,56,59,61,64,66,69,71,77,88,91], 77)

// Big-O of Binary Search

// Best Case => O(1)
// becoz it is possible that the very first value we come across is the value we're looking for.

// Worst and Average Case => O(log n)