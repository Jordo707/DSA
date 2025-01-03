/*

You are given a 0-indexed integer array nums of length n.

nums contains a valid split at index i if the following are true:

The sum of the first i + 1 elements is greater than or equal to the sum of the last n - i - 1 elements.
There is at least one element to the right of i. That is, 0 <= i < n - 1.
Return the number of valid splits in nums.

*/

const waysToSplitArray = nums => {
    let n = nums.length;
    let totalSum = nums.reduce((a, b) => a + b, 0);
    let leftSum = 0;
    let result = 0;

    for (let i = 0; i < n - 1; i++) {
        leftSum += nums[i];
        let rightSum = totalSum - leftSum;
        if (leftSum >= rightSum) {
            result++;
        }
    }

    return result;
};

// Test Cases
console.log(waysToSplitArray([10, 4, -8, 7])); // 2
console.log(waysToSplitArray([2, 3, 1, 0])); // 2
