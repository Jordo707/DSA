/*

You are given an integer array nums and an integer k. Find the maximum subarray sum of all the subarrays of nums that meet the following conditions:

The length of the subarray is k, and
All the elements of the subarray are distinct.
Return the maximum subarray sum of all the subarrays that meet the conditions. If no subarray meets the conditions, return 0.

A subarray is a contiguous non-empty sequence of elements within an array.

*/

const maxSubarraySum = (nums, k) => {
    let sum = 0;
    let max = 0;
    let set = new Set();
    let start = 0;

    for (let end = 0; end < nums.length; end++) {
        while (set.has(nums[end])) {
            set.delete(nums[start]);
            sum -= nums[start];
            start++;
        }

        set.add(nums[end]);
        sum += nums[end];

        if (set.size === k) {
            max = Math.max(max, sum);
            set.delete(nums[start]);
            sum -= nums[start];
            start++;
        }
    }

    return max;
}

// Test Cases
console.log(maxSubarraySum([1,5,4,2,9,9,9], 3)); // 15
console.log(maxSubarraySum([4,4,4], 3)); // 0
