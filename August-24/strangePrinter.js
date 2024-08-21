/*

There is a strange printer with the following two special properties:

The printer can only print a sequence of the same character each time.
At each turn, the printer can print new characters starting from and ending at any place and will cover the original existing characters.
Given a string s, return the minimum number of turns the printer needed to print it.

*/

const strangePrinter = s => {
    if (s.length === 0) {
        return 0;
    }

    // Remove consecutive duplicates
    let filteredChars = [];
    for (const char of s) {
        if (filteredChars.length === 0 || char !== filteredChars[filteredChars.length - 1]) {
            filteredChars.push(char);
        }
    }

    const m = filteredChars.length;
    const dp = Array.from({ length: m }, () => Array(m).fill(Infinity));
    const nextOccurrence = Array(m).fill(-1);

    // Fill DP table with base cases
    for (let i = 0; i < m; i++) {
        dp[i][i] = 1;
    }

    // Precompute next occurrence for each character
    const lastSeen = new Map();
    for (let i = m - 1; i >= 0; i--) {
        const char = filteredChars[i];
        if (lastSeen.has(char)) {
            nextOccurrence[i] = lastSeen.get(char);
        }
        lastSeen.set(char, i);
    }

    // Fill DP table
    for (let length = 2; length <= m; length++) {
        for (let start = 0; start <= m - length; start++) {
            const end = start + length - 1;
            dp[start][end] = dp[start + 1][end] + 1;
            let nextPos = nextOccurrence[start];
            while (nextPos !== -1 && nextPos <= end) {
                dp[start][end] = Math.min(dp[start][end], dp[start][nextPos - 1] + (nextPos + 1 <= end ? dp[nextPos + 1][end] : 0));
                nextPos = nextOccurrence[nextPos];
            }
        }
    }

    return dp[0][m - 1];
};

// Test Cases
console.log(strangePrinter('aaabbb')); // 2
console.log(strangePrinter('aba')); // 2
