/*

You are given a string s of lowercase English letters and a 2D integer array shifts where shifts[i] = [starti, endi, directioni]. For every i, shift the characters in s from the index starti to the index endi (inclusive) forward if directioni = 1, or shift the characters backward if directioni = 0.

Shifting a character forward means replacing it with the next letter in the alphabet (wrapping around so that 'z' becomes 'a'). Similarly, shifting a character backward means replacing it with the previous letter in the alphabet (wrapping around so that 'a' becomes 'z').

Return the final string after all such shifts to s are applied.

*/

const shiftingLetters = (s, shifts) => {
    const n = s.length;
    const net_shifts = Array(n + 1).fill(0); // One extra space for boundary handling

    // Process shifts using the difference array technique
    for (const [start, end, direction] of shifts) {
        const shift_val = direction === 1 ? 1 : -1;
        net_shifts[start] += shift_val;
        if (end + 1 < n) {
            net_shifts[end + 1] -= shift_val;
        }
    }

    // Compute cumulative shifts
    for (let i = 1; i < n; i++) {
        net_shifts[i] += net_shifts[i - 1];
    }

    // Apply shifts to the string
    const result = s.split('').map((char, i) => {
        const newCharCode = ((char.charCodeAt(0) - 97 + net_shifts[i]) % 26 + 26) % 26 + 97;
        return String.fromCharCode(newCharCode);
    });

    return result.join('');
};

// Test Cases
console.log(shiftingLetters('abc', [[0, 1, 0], [1, 2, 1], [0, 2, 1]])); // 'ace'
console.log(shiftingLetters('dxtx', [[0, 0, 0], [1, 1, 1]])); // 'catz'
