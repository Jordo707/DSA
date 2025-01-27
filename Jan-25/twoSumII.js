/*

Given a 1-indexed array of integers numbers that is already sorted in non-decreasing order, find two numbers such that they add up to a specific target number. Let these two numbers be numbers[index1] and numbers[index2] where 1 <= index1 < index2 <= numbers.length.

Return the indices of the two numbers, index1 and index2, added by one as an integer array [index1, index2] of length 2.

The tests are generated such that there is exactly one solution. You may not use the same element twice.

Your solution must use only constant extra space.

*/

const twoSum = (numbers, target) => {
    // Create a variable to store the left index
    let left = 0;
    // Create a variable to store the right index
    let right = numbers.length - 1;
    // Loop through the array
    while (left < right) {
        // Create a variable to store the sum of the left and right index
        let sum = numbers[left] + numbers[right];
        // If the sum is equal to the target
        if (sum === target) {
            // Return the left and right index
            return [left + 1, right + 1];
        // If the sum is less than the target
        } else if (sum < target) {
            // Increment the left index
            left++;
        // If the sum is greater than the target
        } else {
            // Decrement the right index
            right--;
        }
    }
}

// Test Cases
console.log(twoSum([2,7,11,15], 9)); // [1, 2]
console.log(twoSum([2,3,4], 6)); // [1, 3]
console.log(twoSum([-1,0], -1)); // [1, 2]
