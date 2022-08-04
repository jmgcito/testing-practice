function analyzeArray(arr) {
  // returns null if null doesnt exist or is empty
  if (!arr || arr.length < 1) {
    return null;
  }

  const getAverage = (arr) => {
    const sum = arr.reduce((total, value) => {
      return (total += value);
    });
    return sum / arr.length;
  };

  const getMin = (arr) => {
    let min = arr[0];
    for (let i = 0; i < arr.length; i++) {
      let next = i + 1;
      if (min > arr[next]) {
        min = arr[next];
      }
    }
    return min;
  };

  const getMax = (arr) => {
    let max = arr[0];
    for (let i = 0; i < arr.length; i++) {
      let next = i + 1;
      if (max < arr[next]) {
        max = arr[next];
      }
    }
    return max;
  };

  return {
    average: getAverage(arr),
    min: getMin(arr),
    max: getMax(arr),
    length: arr.length,
  };
}

module.exports = analyzeArray;
