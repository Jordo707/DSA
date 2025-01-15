/*

Given an input string s, reverse the order of the words.

A word is defined as a sequence of non-space characters. The words in s will be separated by at least one space.

Return a string of the words in reverse order concatenated by a single space.

Note that s may contain leading or trailing spaces or multiple spaces between two words. The returned string should only have a single space separating the words. Do not include any extra spaces.

*/

const reverseWords = s => {
    // Set a variable to the length of the string
    let n = s.length;
    // Set a variable to an empty string
    let reversed = "";
    // Set a variable to an empty string
    let word = "";
    // Loop through the string, starting from the last index
    for (let i = n - 1; i >= 0; i--) {
        // If the current character is not a space, update the word variable to the current character plus the word variable
        if (s[i] !== " ") {
            word = s[i] + word;
        }
        // If the current character is a space and the word variable is not empty, update the reversed variable to the word variable plus a space and update the word variable to an empty string
        if (s[i] === " " && word !== "") {
            reversed += word + " ";
            word = "";
        }
    }
    // Update the reversed variable to the word variable
    reversed += word;
    // Remove any trailing spaces
    reversed = reversed.trim();
    // Return the reversed variable
    return reversed;
}

// Test Cases
console.log(reverseWords("the sky is blue")); // "blue is sky the"
console.log(reverseWords("  hello world  ")); // "world hello"
console.log(reverseWords("a good   example")); // "example good a"
console.log(reverseWords("  Bob    Loves  Alice   ")); // "Alice Loves Bob"
console.log(reverseWords("Alice does not even like bob")); // "bob like even not does Alice"
console.log(reverseWords("I'm not your friend, buddy")); // "buddy friend, your not I'm"
