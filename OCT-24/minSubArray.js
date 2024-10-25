/*

Given an array of positive integers nums, remove the smallest subarray (possibly empty) such that the sum of the remaining elements is divisible by p. It is not allowed to remove the whole array.

Return the length of the smallest subarray that you need to remove, or -1 if it's impossible.

A subarray is defined as a contiguous block of elements in the array.

*/

const minSubarray = (nums, p) => {
    const totalSum = nums.reduce((sum, num) => sum + num, 0);
    const targetRemainder = totalSum % p;

    // If the total sum is already divisible by p, no need to remove anything
    if (targetRemainder === 0) return 0;

    const prefixRemainders = new Map();
    prefixRemainders.set(0, -1); // Initialize with prefix remainder 0 at index -1
    let minLen = nums.length;
    let currentPrefixSum = 0;

    for (let i = 0; i < nums.length; i++) {
        currentPrefixSum += nums[i];
        let currentRemainder = currentPrefixSum % p;

        // Compute needed remainder to achieve target remainder after removal
        let neededRemainder = (currentRemainder - targetRemainder + p) % p;

        // Check if there's a prefix with the required remainder
        if (prefixRemainders.has(neededRemainder)) {
            let prevIndex = prefixRemainders.get(neededRemainder);
            minLen = Math.min(minLen, i - prevIndex);
        }

        // Store the current remainder and index in map
        prefixRemainders.set(currentRemainder, i);
    }

    // Return -1 if minLen was not updated, meaning no valid subarray found
    return minLen < nums.length ? minLen : -1;
};

// Test Cases
console.log(minSubarray([3, 1, 4, 2], 6)); // Output: 1
console.log(minSubarray([6, 3, 5, 2], 9)); // Output: 2
console.log(minSubarray([1, 2, 3], 3)); // Output: 0

