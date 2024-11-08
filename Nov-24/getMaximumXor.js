/*

You are given a sorted array nums of n non-negative integers and an integer maximumBit. You want to perform the following query n times:

Find a non-negative integer k < 2maximumBit such that nums[0] XOR nums[1] XOR ... XOR nums[nums.length-1] XOR k is maximized. k is the answer to the ith query.
Remove the last element from the current array nums.
Return an array answer, where answer[i] is the answer to the ith query.

*/

const getMaximumXor = (nums, maximumBit) => {
    const n = nums.length;
    const max = (1 << maximumBit) - 1;
    const res = [];
    let xor = 0;
    for (let i = 0; i < n; i++) {
        xor ^= nums[i];
        res.push(xor ^ max);
    }
    return res.reverse();
}

// Test Cases
console.log(getMaximumXor([0,1,1,3], 2)); // [0,3,2,3]
console.log(getMaximumXor([2,3,4,7], 3)); // [5,2,6,5]
console.log(getMaximumXor([0,1,2,2,5,7], 3)); // [4,3,6,4,6,7]
