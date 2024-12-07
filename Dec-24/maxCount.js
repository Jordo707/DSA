/*

You are given an integer array banned and two integers n and maxSum. You are choosing some number of integers following the below rules:

The chosen integers have to be in the range [1, n].
Each integer can be chosen at most once.
The chosen integers should not be in the array banned.
The sum of the chosen integers should not exceed maxSum.
Return the maximum number of integers you can choose following the mentioned rules.

*/

const maxCount = (banned, n, maxSum) => {
    // Convert banned array to a Set for efficient lookups
    const bannedSet = new Set(banned);
    let sum = 0;
    let count = 0;

    for (let i = 1; i <= n; i++) {
        // Skip the number if it's in the banned list
        if (bannedSet.has(i)) continue;

        // Check if adding the current number exceeds maxSum
        if (sum + i > maxSum) break;

        sum += i;
        count++;
    }

    return count;
};

// Test Cases
console.log(maxCount([1,6,5],5,6)); // 2
console.log(maxCount([1,2,3,4,5,6,7],8,1)); // 0
console.log(maxCount([11],7,50)); // 7
