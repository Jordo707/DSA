/*

Given a string s consisting of words and spaces, return the length of the last word in the string.

A word is a maximal substring consisting of non-space characters only.

*/

const lengthOfLastWord = s => {
    // Set a variable to the length of the string
    let n = s.length;
    // Set a variable to 0
    let length = 0;
    // Loop through the string, starting from the last index
    for (let i = n - 1; i >= 0; i--) {
        // If the current character is not a space, increment the length variable
        if (s[i] !== " ") {
            length++;
        }
        // If the current character is a space and the length variable is greater than 0, break the loop
        if (s[i] === " " && length > 0) {
            break;
        }
    }
    // Return the length variable
    return length;
}

// Test Cases
console.log(lengthOfLastWord("Hello World")); // 5
console.log(lengthOfLastWord("   fly me   to   the moon  ")); // 4
console.log(lengthOfLastWord("luffy is still joyboy")); // 6
console.log(lengthOfLastWord("a")); // 1
