/*

Given two strings s and t, determine if they are isomorphic.

Two strings s and t are isomorphic if the characters in s can be replaced to get t.

All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.

*/

const isIsomorphic = (s, t) => {
    if (s.length !== t.length) {
        return false; // Strings of different lengths cannot be isomorphic
    }

    // Create two maps to track character mappings in both directions
    let sToT = {};
    let tToS = {};

    for (let i = 0; i < s.length; i++) {
        let charS = s[i];
        let charT = t[i];

        // Check if `charS` is already mapped to a different character in `t`
        if (sToT[charS] && sToT[charS] !== charT) {
            return false;
        }

        // Check if `charT` is already mapped to a different character in `s`
        if (tToS[charT] && tToS[charT] !== charS) {
            return false;
        }

        // Establish the mappings
        sToT[charS] = charT;
        tToS[charT] = charS;
    }

    return true; // If no conflicts found, strings are isomorphic
};

// Test Cases
console.log(isIsomorphic('egg', 'add')); // true
console.log(isIsomorphic('foo', 'bar')); // false
console.log(isIsomorphic('paper', 'title')); // true
console.log(isIsomorphic('ab', 'aa')); // false

