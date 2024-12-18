/*

You are given an integer array nums, an integer k, and an integer multiplier.

You need to perform k operations on nums. In each operation:

Find the minimum value x in nums. If there are multiple occurrences of the minimum value, select the one that appears first.
Replace the selected minimum value x with x * multiplier.
Return an integer array denoting the final state of nums after performing all k operations.

*/

const getFinalState = (nums, k, multiplier) => {
    for (let i = 0; i < k; i++) {
        // Find the index of the minimum value in the array
        let minIndex = 0;
        for (let j = 1; j < nums.length; j++) {
            if (nums[j] < nums[minIndex]) {
                minIndex = j;
            }
        }
        // Multiply the minimum value by the multiplier
        nums[minIndex] *= multiplier;
    }
    return nums;
}

// Test Cases
console.log(getFinalState([2,1,3,5,6], 5, 2)); // [8,4,6,5,6]
console.log(getFinalState([1,2], 3, 4)); // [16,8]
