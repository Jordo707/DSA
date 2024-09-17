/*

A sentence is a string of single-space separated words where each word consists only of lowercase letters.

A word is uncommon if it appears exactly once in one of the sentences, and does not appear in the other sentence.

Given two sentences s1 and s2, return a list of all the uncommon words. You may return the answer in any order.

*/

const uncommonFromSentences = (s1, s2) => {
    let s1Obj = {}, s2Obj = {};
    s1.split(' ').forEach(word => {
        s1Obj[word] = (s1Obj[word] || 0) + 1;
    });

    s2.split(' ').forEach(word => {
        s2Obj[word] = (s2Obj[word] || 0) + 1;
    });

    let result = [];

    for (let word in s1Obj) {
        if (s1Obj[word] === 1 && !(word in s2Obj)) {
            result.push(word);
        }
    }

    for (let word in s2Obj) {
        if (s2Obj[word] === 1 && !(word in s1Obj)) {
            result.push(word);
        }
    }

    return result;

}

// Test Cases
console.log(uncommonFromSentences('this apple is sweet', 'this apple is sour')); // ['sweet', 'sour']
console.log(uncommonFromSentences('apple apple', 'banana')); // banana
