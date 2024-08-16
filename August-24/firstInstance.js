/*

Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

*/

const strStr = (haystack, needle) => {
    // Weed out cases where needle is longer than haystack
    if (haystack.length < needle.length) {
        return -1;
    }

    // Iterate through haystack, checking for an instance of a substring from i to i + needle.length which is equal to needle, returning the appropriate index if found
    for (let i = 0; i <= haystack.length - needle.length; i++) {
        if (haystack.substring(i, i + needle.length) === needle) {
            return i;
        }
    }

    // If needle substring is not found, return -1
    return -1;
}

// Test Cases
console.log(strStr('sadbutsad', 'sad')); // 0
console.log(strStr("leetcode", "leeto")); // -1
