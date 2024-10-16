/*

A string s is called happy if it satisfies the following conditions:

s only contains the letters 'a', 'b', and 'c'.
s does not contain any of "aaa", "bbb", or "ccc" as a substring.
s contains at most a occurrences of the letter 'a'.
s contains at most b occurrences of the letter 'b'.
s contains at most c occurrences of the letter 'c'.
Given three integers a, b, and c, return the longest possible happy string. If there are multiple longest happy strings, return any of them. If there is no such string, return the empty string "".

A substring is a contiguous sequence of characters within a string.

*/

const longestDiverseString = (a, b, c) => {
    let result = [];
    let counts = [
        { char: 'a', count: a },
        { char: 'b', count: b },
        { char: 'c', count: c }
    ];

    while (true) {
        // Sort the counts to prioritize the character with the most remaining
        counts.sort((x, y) => y.count - x.count);

        let added = false;

        for (let i = 0; i < 3; i++) {
            const { char, count } = counts[i];

            // If this character cannot be added, continue
            if (count === 0) continue;

            // If the last two characters in result are the same, skip this character
            if (result.length >= 2 && result[result.length - 1] === char && result[result.length - 2] === char) {
                continue;
            }

            // Add the character to the result
            result.push(char);
            counts[i].count--;
            added = true;
            break;
        }

        // If no character could be added, we're done
        if (!added) break;
    }

    return result.join('');
};

console.log(longestDiverseString(1, 1, 7)); // ccaccbcc
console.log(longestDiverseString(7, 1, 0)); // aabaa
