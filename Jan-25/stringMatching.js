/*

Given an array of string words, return all strings in words that is a substring of another word. You can return the answer in any order.

A substring is a contiguous sequence of characters within a string

*/

const stringMatching = words => {
    let result = [];
    for (let i = 0; i < words.length; i++) {
        for (let j = 0; j < words.length; j++) {
            if (i !== j && words[j].includes(words[i])) {
                result.push(words[i]);
                break;
            }
        }
    }
    return result;
}

// Test Cases
console.log(stringMatching(['mass','as','hero','superhero'])); // ['as','hero']
console.log(stringMatching(['leetcode','et','code'])); // ['et','code']
console.log(stringMatching(['blue','green','bu'])); // []
