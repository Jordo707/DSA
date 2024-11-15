/*

Given an array of integers nums and an integer k. A continuous subarray is called nice if there are k odd numbers on it.

Return the number of nice sub-arrays.

*/

const numSubarrays = (nums, k) => {
    let count = 0;
    let oddCount = 0;
    let prefix = [1];
    let map = { 0: 1 };

    for (let num of nums) {
        if (num % 2 === 1) {
            oddCount++;
        }

        if (map[oddCount - k]) {
            count += map[oddCount - k];
        }

        map[oddCount] = (map[oddCount] || 0) + 1;
    }

    return count;
}

// Test Cases
console.log(numSubarrays([1, 1, 2, 1, 1], 3)); // 2
console.log(numSubarrays([2, 4, 6], 1)); // 0
console.log(numSubarrays([2, 2, 2, 1, 2, 2, 1, 2, 2, 2], 2)); // 16
