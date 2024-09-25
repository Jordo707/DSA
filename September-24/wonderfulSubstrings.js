/*

A wonderful string is a string where at most one letter appears an odd number of times.

For example, "ccjjc" and "abab" are wonderful, but "ab" is not.
Given a string word that consists of the first ten lowercase English letters ('a' through 'j'), return the number of wonderful non-empty substrings in word. If the same substring appears multiple times in word, then count each occurrence separately.

A substring is a contiguous sequence of characters in a string.

*/

const wonderfulSubstrings = (word) => {
    let count = 0;
    let prefixMask = 0;
    const freqMap = new Map();
    freqMap.set(0, 1); // Initial condition: prefix mask 0 has occurred once

    for (let i = 0; i < word.length; i++) {
        const char = word[i];
        // Update the prefix mask by flipping the bit corresponding to the current character
        prefixMask ^= (1 << (char.charCodeAt(0) - 'a'.charCodeAt(0)));

        // Add occurrences of the exact same prefix mask
        count += freqMap.get(prefixMask) || 0;

        // Check masks that have exactly one bit flipped
        for (let j = 0; j < 10; j++) {
            const flippedMask = prefixMask ^ (1 << j);
            count += freqMap.get(flippedMask) || 0;
        }

        // Increment the count for this prefix mask in the frequency map
        freqMap.set(prefixMask, (freqMap.get(prefixMask) || 0) + 1);
    }

    return count;
};

// Test Cases
console.log(wonderfulSubstrings("aba")); // 4
console.log(wonderfulSubstrings("aabb")); // 9
