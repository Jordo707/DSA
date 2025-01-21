/*

Given two strings s and t, return true if t is an anagram of s, and false otherwise.

*/

const isAnagram = (s, t) => {
    // If the lengths of the strings are different, return false
    if (s.length !== t.length) {
        return false;
    }
    // Create an object to store the frequency of each character in the first string
    let freq = {};
    // Loop through the first string
    for (let char of s) {
        // If the character is not in the object, add it with a frequency of 1
        if (!freq[char]) {
            freq[char] = 1;
        } else {
            // Otherwise, increment the frequency
            freq[char]++;
        }
    }
    // Loop through the second string
    for (let char of t) {
        // If the character is not in the object or the frequency is 0, return false
        if (!freq[char] || freq[char] === 0) {
            return false;
        } else {
            // Otherwise, decrement the frequency
            freq[char]--;
        }
    }
    // Return true
    return true;
}

// Test Cases
console.log(isAnagram('anagram', 'nagaram')); // true
console.log(isAnagram('rat', 'car')); // false
