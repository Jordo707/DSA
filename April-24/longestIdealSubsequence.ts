/* ts

You are given a string s consisting of lowercase letters and an integer k. We call a string t ideal if the following conditions are satisfied:

t is a subsequence of the string s.
The absolute difference in the alphabet order of every two adjacent letters in t is less than or equal to k.
Return the length of the longest ideal string.

A subsequence is a string that can be derived from another string by deleting some or no characters without changing the order of the remaining characters.

Note that the alphabet order is not cyclic. For example, the absolute difference in the alphabet order of 'a' and 'z' is 25, not 1.

*/
function longestIdealString(s: string, k: number): number {
    const dp = new Array(26).fill(0);

    for (let i = 0; i < s.length; i++) {
        const c = s.charCodeAt(i) - 'a'.charCodeAt(0);

        let maxLen = 0;

        for (let j = Math.max(c - k, 0); j <= Math.min(c + k, 25); j++) {
            maxLen = Math.max(maxLen, dp[j]);
        }

        dp[c] = maxLen + 1;
    }

    return Math.max(...dp);
}

// test cases
const s = 'abcde';
const k = 2;
console.log(longestIdealString(s, k)); // expect
