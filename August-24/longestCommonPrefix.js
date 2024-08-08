/*

Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

*/

const longestCommonPrefix = (strs) => {
    // Declare prefix string
    let prefix = '';

    // Iterate through list of strings, comparing the first element of each. If the first elements are shared, append them to the prefix
    for (let i = 0; i < strs[0].length; i++) {
        const char = strs[0][i];
        for (let j = 1; j < strs.length; j++) {
            if (strs[j][i] !== char) {
                return prefix;
            }
        }
        prefix += char;
    }
    return prefix;
}

// Test Cases
console.log(longestCommonPrefix(["flower","flow","flight"])) // Expect "fl"
console.log(longestCommonPrefix(["dog","racecar","car"])) // Expect ""
