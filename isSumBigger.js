// checks if sum is greater than total
function isSumBigger(num1, num2, total) {
  const sum = num1 + num2;
  return sum > total
}

// Should return true
console.log('isSumBigger(1, 3, 2) returns: ' + isSumBigger(1, 3, 2));

// Should return false
console.log('isSumBigger(1, 3, 5) returns: ' + isSumBigger(1, 3, 5));

console.log(isSumBigger(0,0,-1))