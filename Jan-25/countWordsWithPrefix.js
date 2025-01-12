/*

You are given an array of strings words and a string pref.

Return the number of strings in words that contain pref as a prefix.

A prefix of a string s is any leading contiguous substring of s.

*/

const prefixCount = (words, pref) => {
    let count = 0;
    for (let word of words) {
        if (word.startsWith(pref)) {
            count++;
        }
    }
    return count;
}

// Test Cases
console.log(prefixCount(["pay","attention","practice","attend"], "at")); // 2
console.log(prefixCount(["leetcode","win","loops","success"], 'code')); // 0
