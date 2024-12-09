/*

An array is considered special if every pair of its adjacent elements contains two numbers with different parity.

You are given an array of integer nums and a 2D integer matrix queries, where for queries[i] = [fromi, toi] your task is to check that
subarray
 nums[fromi..toi] is special or not.

Return an array of booleans answer such that answer[i] is true if nums[fromi..toi] is special.

*/

const isArraySpecial = (nums, queries) => {
    const n = nums.length;

    if (n < 2) return queries.map(() => true); // Single element is trivially special

    // Step 1: Compute `isAlternating` array
    const isAlternating = Array(n - 1);
    for (let i = 0; i < n - 1; i++) {
        isAlternating[i] = nums[i] % 2 !== nums[i + 1] % 2 ? 1 : 0;
    }

    // Step 2: Compute prefix sum of `isAlternating`
    const prefixSum = Array(n - 1).fill(0);
    prefixSum[0] = isAlternating[0];
    for (let i = 1; i < n - 1; i++) {
        prefixSum[i] = prefixSum[i - 1] + isAlternating[i];
    }

    // Step 3: Evaluate queries using prefix sum
    return queries.map(([from, to]) => {
        if (to === from) return true; // Single element is trivially special
        const totalAlternating = prefixSum[to - 1] - (from > 0 ? prefixSum[from - 1] : 0);
        return totalAlternating === (to - from); // Check if all pairs alternate
    });
};

// Test Cases
console.log(isArraySpecial([3,4,1,2,6], [[0,4]])); // [false]
console.log(isArraySpecial([4,3,1,6],[[0,2],[2,3]])); // [false, true]
