/*

Given an array of integers nums containing n + 1 integers where each integer is in the range [1, n] inclusive.

There is only one repeated number in nums, return this repeated number.

You must solve the problem without modifying the array nums and uses only constant extra space.

*/

const findDuplicate = (nums) => {
    // Initialize tortoise and hare pointers.
    let tortoise = nums[0];
    let hare = nums[0];

    // Find intersection point of two runners.
    do {
        tortoise = nums[tortoise];
        hare = nums[nums[hare]];
    } while (tortoise !== hare);

    // Find entrance to cycle.
    tortoise = nums[0];
    while (tortoise !== hare) {
        tortoise = nums[tortoise];
        hare = nums[hare];
    }

    return hare;
};

// Test Cases
console.log(findDuplicate([1,3,4,2,2])); // 2
console.log(findDuplicate([3,1,3,4,2])); // 3
console.log(findDuplicate([3,3,3,3,3])); // 3
