/*

Given an unsorted integer array nums. Return the smallest positive integer that is not present in nums.

You must implement an algorithm that runs in O(n) time and uses O(1) auxiliary space.

*/

const firstMissingPositive = nums => {

    for (let i = 0; i < nums.length; i++) {
        while (nums[i] > 0 && nums[i] <= nums.length && nums[nums[i] -1] !== nums[i]) {
            [nums[nums[i] - 1], nums[i]] = [nums[i], nums[nums[i] - 1]];
        }
    }

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== i + 1) {
            return i + 1
        }
    }

    return nums.length + 1
}

// Test Cases
console.log(firstMissingPositive([1,2,0])); // 3
console.log(firstMissingPositive([3,4,-1,1])); // 2
console.log(firstMissingPositive([7,8,9,11,12])); // 1
