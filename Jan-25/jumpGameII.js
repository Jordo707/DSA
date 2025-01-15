/*

You are given a 0-indexed array of integers nums of length n. You are initially positioned at nums[0].

Each element nums[i] represents the maximum length of a forward jump from index i. In other words, if you are at nums[i], you can jump to any nums[i + j] where:

0 <= j <= nums[i] and
i + j < n
Return the minimum number of jumps to reach nums[n - 1]. The test cases are generated such that you can reach nums[n - 1].

*/

const jump = nums => {
    // Set a variable to the length of the array
    let n = nums.length;
    // Set a variable to 0
    let jumps = 0;
    // Set a variable to the current position
    let currentPos = 0;
    // Set a variable to the farthest position
    let farthestPos = 0;
    // Loop through the array, starting from the first index
    for (let i = 0; i < n - 1; i++) {
        // Update the farthest position to the maximum of the current farthest position and the sum of the current index and the current element
        farthestPos = Math.max(farthestPos, i + nums[i]);
        // If the current index is equal to the current position, update the current position to the farthest position and increment the jumps variable
        if (i === currentPos) {
            currentPos = farthestPos;
            jumps++;
        }
    }
    // Return the number of jumps
    return jumps;
}

// Test Cases
console.log(jump([2,3,1,1,4])); // 2
console.log(jump([2,3,0,1,4])); // 2
