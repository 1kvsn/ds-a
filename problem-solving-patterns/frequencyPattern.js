// not an official name
// this pattern uses objects or sets to collect values/frequencies of values
// this can often avoid the need for nested loops or O(n^2) operations with arrays/strings

// naive method

function same(arr1, arr2){
    if(arr1.length !== arr2.length){
        return false;
    }
    for(let i = 0; i < arr1.length; i++){
        let correctIndex = arr2.indexOf(arr1[i] ** 2)
        if(correctIndex === -1) {
            return false;
        }
        console.log(arr2);
        arr2.splice(correctIndex,1)
    }
    return true;
}

same([1,2,3,2], [9,1,4,4])

// Big-O is O(n^2)
// Reason: Inside for-loop, we've indexOf method which is iterating through the array as well.

================================================

// refactored

function same(arr1, arr2){
    if(arr1.length !== arr2.length){
        return false;
    }

    let frequencyCounter1 = {}
    let frequencyCounter2 = {}

    for(let val of arr1){
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
    }
    for(let val of arr2){
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1
    }

    console.log(frequencyCounter1);
    console.log(frequencyCounter2);

    for(let key in frequencyCounter1){
        if(!(key ** 2 in frequencyCounter2)){
            return false
        }
        if(frequencyCounter2[key ** 2] !== frequencyCounter1[key]){
            return false
        }
    }
    return true
}

// Big-O is O(n)
// Reason: There is no nested loops here.

same([1,2,3,2,5], [9,1,4,4,11])

===============================================

// my own approach

function same(arr1, arr2) {
    if(arr1.length !== arr2.length) return false;
  
    let count = {};
  
    // count elements in arr2;
    for(let elm of arr2) {
      if(count[elm]) {
        count[elm] = count[elm] + 1;;
      } else {
        count[elm] = 1;
      }
    }
  
    // square all elements of arr1 and save them
    let squaredArr1 = arr1.map(elm => elm ** 2);
  
    // compare squaredArr1 and arr2
  
    for(let element of squaredArr1) {
      if(count[element]) {
        count[element]--;
      } else {
        return false;
      }
    }
  
    return Object.values(count).reduce((acc,val) => acc+val) === 0 ? true : false;
  }
  
  // same([1,2,3], [4,1,9]) // true
  same([1,2,1], [4,4,1]) // false

  // Big-O is O(n)
  // Reason: no nested loop here :)