/*

You are given a 0-indexed array of positive integers nums.

In one operation, you can swap any two adjacent elements if they have the same number of set bits. You are allowed to do this operation any number of times (including zero).

Return true if you can sort the array, else return false.

*/

const canSortArray = nums => {
    // Helper function to count the number of set bits in a number
    const countSetBits = num => num.toString(2).split('1').length - 1;

    // Check if we can sort nums with allowed swaps
    const n = nums.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - 1; j++) {
            // If adjacent elements have the same number of set bits and are out of order, swap them
            if (countSetBits(nums[j]) === countSetBits(nums[j + 1]) && nums[j] > nums[j + 1]) {
                [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]];
            }
        }
    }

    // Check if the array is sorted
    for (let i = 0; i < n - 1; i++) {
        if (nums[i] > nums[i + 1]) {
            return false;
        }
    }
    return true;
}

// Test Cases
console.log(canSortArray([8,4,2,30,15])) // true
console.log(canSortArray([1,2,3,4,5])) // true
console.log(canSortArray([3,16,8,4,2])) // false
