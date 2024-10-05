/*

Given two strings s1 and s2, return true if s2 contains a
permutation of s1, or false otherwise.

In other words, return true if one of s1's permutations is the substring of s2.

*/

const checkInclusion = (s1, s2) => {
    if (s1.length > s2.length) return false;

    const countMap = new Array(26).fill(0); // Frequency map for s1
    const windowMap = new Array(26).fill(0); // Frequency map for the window in s2

    const aCharCode = 'a'.charCodeAt(0);

    // Fill frequency map for s1
    for (let char of s1) {
        countMap[char.charCodeAt(0) - aCharCode]++;
    }

    // Initialize the window map for the first window in s2
    for (let i = 0; i < s1.length; i++) {
        windowMap[s2[i].charCodeAt(0) - aCharCode]++;
    }

    // Check if the initial window matches the countMap
    if (windowMap.toString() === countMap.toString()) return true;

    // Slide the window over s2, one character at a time
    for (let i = s1.length; i < s2.length; i++) {
        // Add the new character to the window
        windowMap[s2[i].charCodeAt(0) - aCharCode]++;

        // Remove the character that is left behind
        windowMap[s2[i - s1.length].charCodeAt(0) - aCharCode]--;

        // Check if current window matches the countMap
        if (windowMap.toString() === countMap.toString()) return true;
    }

    return false;
};

// Test Cases
console.log(checkInclusion('ab', 'eidbaooo')); // true
console.log(checkInclusion('ab', 'eidboaoo')); // false
