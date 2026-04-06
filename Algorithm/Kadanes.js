// Kadane's Algorithm 


function kadane(arr) {
  let maxSum = -Infinity;
  let currentSum = 0;

  for (let num of arr) {
    currentSum += num;
    maxSum = Math.max(maxSum, currentSum);

    if (currentSum < 0) {
      currentSum = 0;
    }
  }

  return maxSum;
}


function kadaneWithIndices(arr) {
  let maxSum = -Infinity;
  let currentSum = 0;

  let start = 0;
  let tempStart = 0;
  let end = 0;

  for (let i = 0; i < arr.length; i++) {
    currentSum += arr[i];

    if (currentSum > maxSum) {
      maxSum = currentSum;
      start = tempStart;
      end = i;
    }

    if (currentSum < 0) {
      currentSum = 0;
      tempStart = i + 1;
    }
  }

  return {
    maxSum,
    subarray: arr.slice(start, end + 1),
    start,
    end,
  };
}


function main() {
  const arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4];

  console.log("Array:", arr);

  
  const maxSum = kadane(arr);
  console.log("Maximum Subarray Sum:", maxSum);

  
  const result = kadaneWithIndices(arr);
  console.log("Detailed Result:", result);
}


main();
