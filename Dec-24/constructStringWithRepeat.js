/*

You are given a string s and an integer repeatLimit. Construct a new string repeatLimitedString using the characters of s such that no letter appears more than repeatLimit times in a row. You do not have to use all characters from s.

Return the lexicographically largest repeatLimitedString possible.

A string a is lexicographically larger than a string b if in the first position where a and b differ, string a has a letter that appears later in the alphabet than the corresponding letter in b. If the first min(a.length, b.length) characters do not differ, then the longer string is the lexicographically larger one.

*/

const repeatLimitedString = (s, repeatLimit) => {
    // Step 1: Create a frequency map
    const freq = new Map();
    for (let char of s) {
        freq.set(char, (freq.get(char) || 0) + 1);
    }

    // Step 2: Sort characters in descending order
    const sortedChars = Array.from(freq.keys()).sort((a, b) => b.localeCompare(a));

    let result = '';
    let currentStreak = 0; // How many times current char has been added
    let prevChar = '';

    // Step 3: While we have characters to process
    while (sortedChars.length) {
        let char = sortedChars[0];

        if (char === prevChar && currentStreak === repeatLimit) {
            // If we hit the repeatLimit, find the next largest character
            if (sortedChars.length > 1) {
                const nextChar = sortedChars[1];
                result += nextChar;
                freq.set(nextChar, freq.get(nextChar) - 1);
                if (freq.get(nextChar) === 0) {
                    sortedChars.splice(1, 1); // Remove from list
                }
                currentStreak = 0; // Reset streak since we used a different char
                prevChar = nextChar;
            } else {
                // No alternative character available, break
                break;
            }
        } else {
            // Add the largest character
            result += char;
            freq.set(char, freq.get(char) - 1);
            if (freq.get(char) === 0) {
                sortedChars.shift(); // Remove character if exhausted
            }
            currentStreak = (char === prevChar) ? currentStreak + 1 : 1;
            prevChar = char;
        }
    }

    return result;
}

// Test Cases
console.log(repeatLimitedString("cczazcc", 2)); // 'zzcccac'
console.log(repeatLimitedString('bbababa', 2)); // 'bbabaa'
