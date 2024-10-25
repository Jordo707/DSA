/*

Given an array of positive integers nums, remove the smallest subarray (possibly empty) such that the sum of the remaining elements is divisible by p. It is not allowed to remove the whole array.

Return the length of the smallest subarray that you need to remove, or -1 if it's impossible.

A subarray is defined as a contiguous block of elements in the array.

*/

const minSubarray = (nums, p) => {
    const totalSum = nums.reduce((sum, num) => sum + num, 0);
    const target = totalSum % p;
    if (target === 0) return 0; // No need to remove any subarray if the sum is already divisible

    const prefixSum = new Map();
    prefixSum.set(0, -1); // Base case: prefix sum at index -1
    let minLen = Infinity;
    let currentSum = 0;

    for (let i = 0; i < nums.length; i++) {
        currentSum = (currentSum + nums[i]) % p;
        const neededMod = (currentSum - target + p) % p;

        if (prefixSum.has(neededMod)) {
            minLen = Math.min(minLen, i - prefixSum.get(neededMod));
        }

        prefixSum.set(currentSum, i);
    }

    return minLen === Infinity ? -1 : minLen;
}

// Test Cases
console.log(minSubarray([3,1,4,2],6)); // Expected output: 1
console.log(minSubarray([6,3,5,2],9)); // Expected output: 2
console.log(minSubarray([1,2,3],3)); // Expected output: 0

