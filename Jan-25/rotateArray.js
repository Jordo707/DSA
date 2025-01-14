/*

Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.

*/

const rotate = (nums, k) => {
    // If k is greater than the length of the array, set k to the remainder of k divided by the length of the array
    k %= nums.length;
    // Reverse the entire array
    reverse(nums, 0, nums.length - 1);
    // Reverse the first k elements of the array
    reverse(nums, 0, k - 1);
    // Reverse the remaining elements of the array
    reverse(nums, k, nums.length - 1);
    return nums;
}

// Helper function to reverse the elements of the array
const reverse = (nums, start, end) => {
    while (start < end) {
        let temp = nums[start];
        nums[start] = nums[end];
        nums[end] = temp;
        start++;
        end--;
    }
}

// Test Cases
console.log(rotate([1,2,3,4,5,6,7], 3)); // [5,6,7,1,2,3,4]
console.log(rotate([-1,-100,3,99], 2)); // [3,99,-1,-100]
