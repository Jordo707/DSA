/*

Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.

*/

const longestConsecutive = (nums) => {
    // Create a set to store the numbers
    const set = new Set(nums);
    let longestStreak = 0;

    // Loop through the numbers
    for (const num of set) {
        // If the number is the start of a sequence
        if (!set.has(num - 1)) {
            let currentNum = num;
            let currentStreak = 1;

            // Loop through the sequence
            while (set.has(currentNum + 1)) {
                currentNum++;
                currentStreak++;
            }

            // Update the longest streak
            longestStreak = Math.max(longestStreak, currentStreak);
        }
    }

    return longestStreak;
}

// Test Cases
console.log(longestConsecutive([100, 4, 200, 1, 3, 2])); // 4
console.log(longestConsecutive([0, 1, 2, 3])); // 4
console.log(longestConsecutive([0,3,7,2,5,8,4,6,0,1])); // 9
