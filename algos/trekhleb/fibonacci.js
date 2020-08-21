function fibonacci(n) {
  let first = 0;
	let second = 1;
	
  let result = [];
	let temp;

  while(first+second < n) {
    if(!result.length) {
      result.push(first)
      result.push(second)
    } else {
      temp = first + second;
      first = second;
      second = temp;
      result.push(temp);
    }
  }
  return result;
}

fibonacci(200) // 0,1,1,2,3,5,8