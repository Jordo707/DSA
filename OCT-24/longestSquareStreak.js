/*

You are given an integer array nums. A subsequence of nums is called a square streak if:

The length of the subsequence is at least 2, and
after sorting the subsequence, each element (except the first element) is the square of the previous number.
Return the length of the longest square streak in nums, or return -1 if there is no square streak.

A subsequence is an array that can be derived from another array by deleting some or no elements without changing the order of the remaining elements.

*/

const longestSquareStreak = nums => {
    // Initialize the longest square streak length
    let maxSquareStreakLength = 0;

    // Sort the array to ensure square streaks are in order
    nums.sort((a, b) => a - b);

    // Create a Set for quick access to elements in nums
    const numSet = new Set(nums);

    // Iterate over each number in sorted nums
    for (let num of nums) {
        let streakLength = 1; // Each single number starts with a streak length of 1
        let current = num;

        // Continue to find squares in sequence
        while (numSet.has(current * current)) {
            current = current * current;
            streakLength += 1;
        }

        // Check if the current streak is the longest
        if (streakLength > maxSquareStreakLength) {
            maxSquareStreakLength = streakLength;
        }
    }

    // Return the longest streak found or -1 if no valid square streak was found
    return maxSquareStreakLength >= 2 ? maxSquareStreakLength : -1;
};

// Test Cases
console.log(longestSquareStreak([4,3,6,16,8,2])); // 3
console.log(longestSquareStreak([2,3,5,6,7])); // -1
