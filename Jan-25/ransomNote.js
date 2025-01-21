/*

Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.

Each letter in magazine can only be used once in ransomNote.

*/

const canConstruct = (ransomNote, magazine) => {
    // Create an object to store the frequency of each character in the magazine
    let freq = {};
    // Loop through the magazine
    for (let char of magazine) {
        // If the character is not in the object, add it with a frequency of 1
        if (!freq[char]) {
            freq[char] = 1;
        } else {
            // Otherwise, increment the frequency
            freq[char]++;
        }
    }
    // Loop through the ransomNote
    for (let char of ransomNote) {
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
console.log(canConstruct('a', 'b')); // false
console.log(canConstruct('aa', 'ab')); // false
console.log(canConstruct('aa', 'aab')); // true
