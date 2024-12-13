/*

You are given an array nums consisting of positive integers.

Starting with score = 0, apply the following algorithm:

Choose the smallest integer of the array that is not marked. If there is a tie, choose the one with the smallest index.
Add the value of the chosen integer to score.
Mark the chosen element and its two adjacent elements if they exist.
Repeat until all the array elements are marked.
Return the score you get after applying the above algorithm.

*/

const findScore = (nums) => {
    // Keep track of marked elements
    const marked = new Array(nums.length).fill(false);
    let score = 0;

    // Create an array of indices sorted by their values and indices
    const indices = Array.from(nums.keys());
    indices.sort((a, b) => {
        if (nums[a] === nums[b]) return a - b; // Break ties by index
        return nums[a] - nums[b]; // Sort by value
    });

    for (const index of indices) {
        // Skip this element if it is already marked
        if (marked[index]) continue;

        // Add the value of the current element to the score
        score += nums[index];

        // Mark this element and its adjacent elements
        marked[index] = true;
        if (index > 0) marked[index - 1] = true;
        if (index < nums.length - 1) marked[index + 1] = true;
    }

    return score;
}

// Test cases
console.log(findScore([2,1,3,4,5,2])); // 7
console.log(findScore([2,3,5,1,3,2])); // 5
