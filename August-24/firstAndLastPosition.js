/*

Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value.

If target is not found in the array, return [-1, -1].

You must write an algorithm with O(log n) runtime complexity.

*/

const searchRange = (nums, target) => {
    // Helper function to find the first or last position of the target
  const binarySearch = (findFirst) => {
    let left = 0;
    let right = nums.length - 1;
    let result = -1;

    while (left <= right) {
      const mid = Math.floor((left + right) / 2);

      if (nums[mid] === target) {
        result = mid;
        // If finding the first occurrence, move left; else move right
        if (findFirst) {
          right = mid - 1;
        } else {
          left = mid + 1;
        }
      } else if (nums[mid] < target) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }

    return result;
  };

  // Perform binary search to find the first and last positions
  const firstPos = binarySearch(true);
  if (firstPos === -1) return [-1, -1];

  const lastPos = binarySearch(false);

  return [firstPos, lastPos];
}

// Test Cases
console.log(searchRange([5,7,7,8,8,10], 8)); // [3,4]
console.log(searchRange([5,7,7,8,8,10], 6)); // [-1,-1]
console.log(searchRange([], 0)); // [-1,-1]
