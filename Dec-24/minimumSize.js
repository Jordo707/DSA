/*

You are given an integer array nums where the ith bag contains nums[i] balls. You are also given an integer maxOperations.

You can perform the following operation at most maxOperations times:

Take any bag of balls and divide it into two new bags with a positive number of balls.
For example, a bag of 5 balls can become two new bags of 1 and 4 balls, or two new bags of 2 and 3 balls.
Your penalty is the maximum number of balls in a bag. You want to minimize your penalty after the operations.

Return the minimum possible penalty after performing the operations.

*/

const minimumSize = (nums, maxOperations) => {
  let left = 1;
  let right = Math.max(...nums);
  while (left < right) {
    let mid = left + Math.floor((right - left) / 2);
    let count = 0;
    for (let num of nums) {
      count += Math.ceil(num / mid) - 1;
    }
    if (count > maxOperations) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  return left;
}

// Test Cases
console.log(minimumSize([9], 2)); // 3
console.log(minimumSize([2, 4, 8, 2], 4)); // 2
