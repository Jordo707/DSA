/*

Given a pattern and a string s, find if s follows the same pattern.

Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in s. Specifically:

Each letter in pattern maps to exactly one unique word in s.
Each unique word in s maps to exactly one letter in pattern.
No two letters map to the same word, and no two words map to the same letter.

*/

const wordPattern = (pattern, s) => {
    // Split the string into an array of words
    let words = s.split(' ');
    // If the length of the pattern and the length of the words array are different, return false
    if (pattern.length !== words.length) {
        return false;
    }
    // Use Map instead of plain objects
    let patternToWord = new Map();
    let wordToPattern = new Map();
    // Loop through the pattern
    for (let i = 0; i < pattern.length; i++) {
        let char = pattern[i];
        let word = words[i];
        // Check if the character is already mapped to a different word
        if (patternToWord.has(char) && patternToWord.get(char) !== word) {
            return false;
        }
        // Check if the word is already mapped to a different character
        if (wordToPattern.has(word) && wordToPattern.get(word) !== char) {
            return false;
        }
        // Establish the mappings
        patternToWord.set(char, word);
        wordToPattern.set(word, char);
    }
    return true;
}

// Test Cases
console.log(wordPattern('abba', 'dog cat cat dog')); // true
console.log(wordPattern('abba', 'dog cat cat fish')); // false
console.log(wordPattern('aaaa', 'dog cat cat dog')); // false
console.log(wordPattern('abba', 'dog constructor constructor dog')); // true

