/*

You are given a string s. You can convert s to a
palindrome by adding characters in front of it.

Return the shortest palindrome you can find by performing this transformation.

*/

const shortestPalindrome = s => {
    const reverseStr = s.split('').reverse().join('');
    const combined = s + '#' + reverseStr;

    // Compute the KMP partial match table
    const table = new Array(combined.length).fill(0);

    for (let i = 1; i < combined.length; i++) {
        let j = table[i - 1];

        while (j > 0 && combined[i] !== combined[j]) {
            j = table[j - 1];
        }

        if (combined[i] === combined[j]) {
            j++;
        }

        table[i] = j;
    }

    // The length of the longest palindromic prefix in s
    const longestPalindromicPrefix = table[combined.length - 1];

    // Add the reversed non-palindromic suffix in front of the string s
    const suffixToAdd = reverseStr.slice(0, s.length - longestPalindromicPrefix);

    return suffixToAdd + s;
}

// Test Cases
console.log(shortestPalindrome('aacecaaa')); // "aaacecaaa"
console.log(shortestPalindrome('abcd')); // "dcbabcd"
