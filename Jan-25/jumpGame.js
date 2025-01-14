/*

You are given an integer array nums. You are initially positioned at the array's first index, and each element in the array represents your maximum jump length at that position.

Return true if you can reach the last index, or false otherwise.

*/

const canJump = nums => {
    // Set a variable to the lenght of the array minus 1
    let lastPosition = nums.length - 1;
    // Loop through the array, starting from the end
    for (let i = nums.length - 1; i >= 0; i--) {
        // If the sum of the current index and the current element is greater than or equal to the last position, update the last position to the current index
        if (i + nums[i] >= lastPosition) {
            lastPosition = i;
        }
    }
    // Return true if the last position is 0, false otherwise
    return lastPosition === 0;

}

// Test Cases
console.log(canJump([2,3,1,1,4])); // true
console.log(canJump([3,2,1,0,4])); // false
