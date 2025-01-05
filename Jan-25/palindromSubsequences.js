/*

Given a string s, return the number of unique palindromes of length three that are a subsequence of s.

Note that even if there are multiple ways to obtain the same subsequence, it is still only counted once.

A palindrome is a string that reads the same forwards and backwards.

A subsequence of a string is a new string generated from the original string with some characters (can be none) deleted without changing the relative order of the remaining characters.

For example, "ace" is a subsequence of "abcde".

*/

const countPalindromicSubsequence = s => {
    let uniquePalindromes = new Set();
    for (let i = 0; i < s.length; i++) {
        let start = s[i];
        for (let j = i + 1; j < s.length; j++) {
            let middle = s[j];
            for (let k = j + 1; k < s.length; k++) {
                let end = s[k];
                if (start === end) {
                    uniquePalindromes.add(start + middle + end);
                }
            }
        }
    }
    return uniquePalindromes.size;
}

// Test Cases
console.log(countPalindromicSubsequence('aabca')); // 3
console.log(countPalindromicSubsequence('adc')); // 0
console.log(countPalindromicSubsequence('bbcbaba')); // 4
