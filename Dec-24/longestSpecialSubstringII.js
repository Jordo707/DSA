/*

You are given a string s that consists of lowercase English letters.

A string is called special if it is made up of only a single character. For example, the string "abc" is not special, whereas the strings "ddd", "zz", and "f" are special.

Return the length of the longest special substring of s which occurs at least thrice, or -1 if no special substring occurs at least thrice.

A substring is a contiguous non-empty sequence of characters within a string.

*/

const maximumLength = s => {
    const n = s.length;
    let maxLength = -1;

    // Function to count occurrences of a substring in the string
    const countOccurrences = (sub) => {
        let count = 0;
        for (let i = 0; i <= n - sub.length; i++) {
            if (s.substring(i, i + sub.length) === sub) {
                count++;
            }
        }
        return count;
    };

    // Iterate over all possible substring lengths
    for (let len = 1; len <= n; len++) {
        for (let i = 0; i <= n - len; i++) {
            const sub = s.substring(i, i + len);
            // Check if substring is special and occurs at least thrice
            if (sub.split('').every(char => char === sub[0])) {
                const occurrences = countOccurrences(sub);
                if (occurrences >= 3) {
                    maxLength = Math.max(maxLength, len);
                }
            }
        }
    }

    return maxLength;
}

// Test Cases
console.log(maximumLength('aaaa')); // 2
console.log(maximumLength('abcdef')); //-1
console.log(maximumLength('abcaba')); // 1
