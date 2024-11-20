/*

You are given a string s consisting of the characters 'a', 'b', and 'c' and a non-negative integer k. Each minute, you may take either the leftmost character of s, or the rightmost character of s.

Return the minimum number of minutes needed for you to take at least k of each character, or return -1 if it is not possible to take k of each character.

*/

const takeCharacters = (s, k) => {
    // Count the total occurrences of each character
    const total = { a: 0, b: 0, c: 0 };
    for (const char of s) {
        total[char]++;
    }

    // If it's not possible to take k of each character, return -1
    if (total.a < k || total.b < k || total.c < k) {
        return -1;
    }

    const n = s.length;
    let maxLength = 0;
    const count = { a: 0, b: 0, c: 0 };
    let start = 0;

    // Sliding window to find the maximum valid substring
    for (let end = 0; end < n; end++) {
        count[s[end]]++;

        // Ensure the substring [start, end] doesn't violate the conditions
        while (count.a > total.a - k || count.b > total.b - k || count.c > total.c - k) {
            count[s[start]]--;
            start++;
        }

        // Update the maximum length of a valid substring
        maxLength = Math.max(maxLength, end - start + 1);
    }

    // Minimum minutes required is total length minus the maximum valid substring
    return n - maxLength;
};

// Test Cases
console.log(takeCharacters("aabaaaacaabc", 2)); // 8
console.log(takeCharacters("a", 1)); // -1
