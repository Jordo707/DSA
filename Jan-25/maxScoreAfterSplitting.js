/*

Given a string s of zeros and ones, return the maximum score after splitting the string into two non-empty substrings (i.e. left substring and right substring).

The score after splitting a string is the number of zeros in the left substring plus the number of ones in the right substring.

*/

const maxScore = s => {
    let max = 0;
    let zeros = 0;
    let ones = 0;

    for (const char of s) {
        if (char === '1') {
            ones++;
        }
    }

    for (let i = 0; i < s.length - 1; i++) {
        if (s[i] === '0') {
            zeros++;
        } else {
            ones--;
        }

        max = Math.max(max, zeros + ones);
    }

    return max;
}

// Test cases
console.log(maxScore("011101")); // 5
console.log(maxScore("00111")); // 5
console.log(maxScore("1111")); // 3
