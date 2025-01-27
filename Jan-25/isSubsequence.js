/*

Given two strings s and t, return true if s is a subsequence of t, or false otherwise.

A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).

*/

const isSubsequence = (s, t) => {
    // Create a variable to store the index of the string
    let index = 0;
    // Loop through the string
    for (let char of t) {
        // If the character is equal to the character in the string
        if (char === s[index]) {
            // Increment the index
            index++;
        }
    }
    // Return true if the index is equal to the length of the string
    return index === s.length;
}

// Test Cases
console.log(isSubsequence("abc", "ahbgdc")); // true
console.log(isSubsequence("axc", "ahbgdc")); // false
