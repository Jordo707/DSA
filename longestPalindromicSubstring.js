// Given a string s, return the longest palindromic substring in s.

const longestPalindromicSubstring = s => {
    if (s.length < 1) return "";

    let start = 0;
    let end = 0;

    const expandAroundCenter = (left, right) => {
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            left--;
            right++;
        }
        // When the while loop breaks, right and left are one step further out than the valid palindrome, so subtract extra 1 from length calculation
        if (end - start < right - left - 2) {
            start = left + 1;
            end = right - 1;
        }
    };

    for (let i = 0; i < s.length; i++) {
        // Odd length palindromes (single character center)
        expandAroundCenter(i, i);
        // Even length palindromes (between characters center)
        if (i < s.length - 1) {
            expandAroundCenter(i, i + 1);
        }
    }

    return s.substring(start, end + 1);
}

// test cases
console.log(longestPalindromicSubstring('babad')) // expect 'bab'
console.log(longestPalindromicSubstring('cbbd')) // expect 'bb'
console.log(longestPalindromicSubstring('acab')) // expect 'aca'
