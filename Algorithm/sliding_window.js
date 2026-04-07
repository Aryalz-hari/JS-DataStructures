// ===============================
// SLIDING WINDOW - SINGLE FILE
// ===============================

function maxSumSubarray(arr, k) {
  let windowSum = 0;
  let maxSum = 0;

  // First window
  for (let i = 0; i < k; i++) {
    windowSum += arr[i];
  }

  maxSum = windowSum;

  // Slide window
  for (let i = k; i < arr.length; i++) {
    windowSum += arr[i];
    windowSum -= arr[i - k];
    maxSum = Math.max(maxSum, windowSum);
  }

  return maxSum;
}

function longestUniqueSubstring(s) {
  let set = new Set();
  let left = 0;
  let maxLength = 0;

  for (let right = 0; right < s.length; right++) {
    while (set.has(s[right])) {
      set.delete(s[left]);
      left++;
    }

    set.add(s[right]);
    maxLength = Math.max(maxLength, right - left + 1);
  }

  return maxLength;
}

function minSubArrayLen(target, arr) {
  let left = 0;
  let sum = 0;
  let minLength = Infinity;

  for (let right = 0; right < arr.length; right++) {
    sum += arr[right];

    while (sum >= target) {
      minLength = Math.min(minLength, right - left + 1);
      sum -= arr[left];
      left++;
    }
  }

  return minLength === Infinity ? 0 : minLength;
}

function characterReplacement(s, k) {
  let map = {};
  let left = 0;
  let maxCount = 0;
  let maxLength = 0;

  for (let right = 0; right < s.length; right++) {
    map[s[right]] = (map[s[right]] || 0) + 1;
    maxCount = Math.max(maxCount, map[s[right]]);

    while (right - left + 1 - maxCount > k) {
      map[s[left]]--;
      left++;
    }

    maxLength = Math.max(maxLength, right - left + 1);
  }

  return maxLength;
}

console.log("Max Sum (Fixed Window):", maxSumSubarray([2, 1, 5, 1, 3, 2], 3));

console.log("Longest Unique Substring:", longestUniqueSubstring("abcabcbb"));

console.log("Min Subarray Length:", minSubArrayLen(7, [2, 3, 1, 2, 4, 3]));

console.log("Character Replacement:", characterReplacement("AABABBA", 1));
