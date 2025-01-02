/*

You are given a 0-indexed array of strings words and a 2D array of integers queries.

Each query queries[i] = [li, ri] asks us to find the number of strings present in the range li to ri (both inclusive) of words that start and end with a vowel.

Return an array ans of size queries.length, where ans[i] is the answer to the ith query.

Note that the vowel letters are 'a', 'e', 'i', 'o', and 'u'.

*/

const vowelStrings = (words, queries) => {
    const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
    const n = words.length;
    const prefix = new Array(n + 1).fill(0);
    const ans = [];

    // Build prefix sum array to count strings that start and end with vowels
    for (let i = 1; i <= n; i++) {
        const word = words[i - 1];
        // Check if the word starts and ends with a vowel
        if (vowels.has(word[0]) && vowels.has(word[word.length - 1])) {
            prefix[i] = prefix[i - 1] + 1;
        } else {
            prefix[i] = prefix[i - 1];
        }
    }

    // Process each query using the prefix sum
    for (const [li, ri] of queries) {
        ans.push(prefix[ri + 1] - prefix[li]);
    }

    return ans;
};

// Test cases
const words1 = ["aba", "bcb", "ece", "aa", "e"];
const queries1 = [[0, 2], [1, 4], [1, 1]];
console.log(vowelStrings(words1, queries1)); // [2, 3, 0]

const words2 = ["a", "e", "i"];
const queries2 = [[0, 2], [0, 1], [2, 2]];
console.log(vowelStrings(words2, queries2)); // [3, 2, 1]

