/*

Given a string s, return the longest palindromic substring in s.

*/

const longestPalindrome = (s) => {
    if (!s || s.length < 1) return "";

    let start = 0, end = 0;

    const expandAroundCenter = (s, left, right) => {
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            left--;
            right++;
        }
        return right - left - 1; // Length of the palindrome
    };

    for (let i = 0; i < s.length; i++) {
        let len1 = expandAroundCenter(s, i, i); // Odd length palindromes
        let len2 = expandAroundCenter(s, i, i + 1); // Even length palindromes
        let len = Math.max(len1, len2);
        if (len > end - start) {
            start = i - Math.floor((len - 1) / 2);
            end = i + Math.floor(len / 2);
        }
    }

    return s.substring(start, end + 1);
}

// Test Cases
console.log(longestPalindrome('babad')) // Expect 'aba' or 'bab'
console.log(longestPalindrome('cbbd')) // Expect 'bb'
