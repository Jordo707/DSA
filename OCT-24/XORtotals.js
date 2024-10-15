/*

The XOR total of an array is defined as the bitwise XOR of all its elements, or 0 if the array is empty.

For example, the XOR total of the array [2,5,6] is 2 XOR 5 XOR 6 = 1.
Given an array nums, return the sum of all XOR totals for every subset of nums.

Note: Subsets with the same elements should be counted multiple times.

An array a is a subset of an array b if a can be obtained from b by deleting some (possibly zero) elements of b.

*/

const subsetXORSum = (nums) => {
    let totalSum = 0;

    const calculateSubsetXOR = (currentXOR, index) => {
        if (index === nums.length) {
            totalSum += currentXOR;
            return;
        }

        // Exclude the current element
        calculateSubsetXOR(currentXOR, index + 1);

        // Include the current element
        calculateSubsetXOR(currentXOR ^ nums[index], index + 1);
    };

    // Start with XOR value 0 and at index 0
    calculateSubsetXOR(0, 0);

    return totalSum;
};

// Test Cases
console.log(subsetXORSum([1,3])); // 6
console.log(subsetXORSum([5,1,6])); // 28
console.log(subsetXORSum([3,4,5,6,7,8])); // 480

