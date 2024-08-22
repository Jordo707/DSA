/*

Given an array of integers nums, write a function that returns a new array output such that output[i] is equal to the product of all the elements of nums except nums[i].

Constraints:

You cannot use division in your solution.
You cannot use any auxiliary space other than the output array (O(1) extra space). The result array output does not count as extra space.
The solution should run in O(n) time complexity.
The input array nums may contain negative numbers and zeros.

*/

const ArrayProductExclusion = nums => {
    const n = nums.length;
    const res = new Array(n).fill(1);

    let leftProd = 1;
    for (let i = 0; i < n; i++) {
        res[i] = leftProd;
        leftProd *= nums[i];
    }

    let rightProd = 1;
    for (let i = n - 1; i >= 0; i--) {
        res[i] *= rightProd;
        rightProd *= nums[i];
    }

    return res;
}

// Test Cases
console.log(ArrayProductExclusion([1, 2, 3, 4])); // [24, 12, 8, 6]
