const getMaxTemp = (temps) => {

  let previousTemp = null;
  let currentMaxTemp = 0;

  return temps.reduce((acc, temp) => {

    const increasing = previousTemp ? (temp - previousTemp > 0) : false;

    if (increasing) {
      currentMaxTemp += (temp - previousTemp);
    } else {
      currentMaxTemp = 0;
    }

    previousTemp = temp;

    if (currentMaxTemp > acc) acc = currentMaxTemp;

    return acc;

  }, 0);

}


console.log(getMaxTemp([10, 20, 30, 40, 50]));
console.log(getMaxTemp([10, 20, 9, 16, 17] ));
console.log(getMaxTemp([5, 4, 3] ));
console.log(getMaxTemp([5, 2, 1, 4, 9, 2, 15] ));
console.log(getMaxTemp([5, 3, 1, 8, 9, 6, 20, 21, 34, 20, 15, 14, 17, 16, 16, 10, 5, 6, 8, 10, 11, 20, 22, 24, 29, 30, 34, 28, 20, 12, 8, 15, 14, 10, 36, 20]));
