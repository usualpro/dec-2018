// Othmane, Mariam
calcMaxConsecutiveDiff = (arr) => {
  if (arr.length === 0) return 0;

  let maxDiff = 0;
  let cumulatedDiff = 0;
  let previousElement = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] >= previousElement) {
      cumulatedDiff += arr[i] - previousElement;
    } else {
      if (cumulatedDiff > maxDiff) {
        maxDiff = cumulatedDiff;
      }
      cumulatedDiff = 0;
    }
    previousElement = arr[i];
  }

  if (cumulatedDiff > maxDiff) {
    maxDiff = cumulatedDiff;
  }

  return maxDiff;
}

console.log(calcMaxConsecutiveDiff([10, 20, 30, 40, 50]));

console.log(calcMaxConsecutiveDiff([10, 20, 9, 16, 17]));

console.log(calcMaxConsecutiveDiff([5, 4, 3]));

console.log(calcMaxConsecutiveDiff([1]));

console.log(calcMaxConsecutiveDiff([5, 2, 1, 4, 9, 2, 15]));

console.log(calcMaxConsecutiveDiff([5, 3, 1, 8, 9, 6, 20, 21, 34, 20, 15, 14, 17, 16, 16, 10, 5, 6, 8, 10, 11, 20, 22, 24, 29, 30, 34, 28, 20, 12, 8, 15, 14, 10, 36, 20]));
