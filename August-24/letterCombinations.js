/*

Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. Return the answer in any order.

*/

// Object mapping number to letters
const letterMap = {
    1: [""],
    2: ["a", "b", "c"],
    3: ["d", "e", "f"],
    4: ["g", "h", "i"],
    5: ["j", "k", "l"],
    6: ["m", "n", "o"],
    7: ["p", "q", "r", "s"],
    8: ["t", "u", "v"],
    9: ["w", "x", "y", "z"]
}

// Helper function to generate combinations
const backtrack = (index, path, digits, letters, combos) => {
    if (path.length === digits.length) {
        combos.push(path.join(""));
        return;
    }
    let posLetters = letters[digits[index]];

    if (posLetters) {
        for (let i = 0; i < posLetters.length; i++) {
            // Add current letter to path
            let letter = posLetters[i];
            path.push(letter);

            // Recursively search for next digit
            backtrack(index + 1, path, digits, letters, combos);

            // Remove current letter from path before exploring other combinations
            path.pop();
        }
    }
}

const letterCombinations = (digits) => {
    // initialize combo array
    let combos = [];

    if (!digits.length) return combos;

    backtrack(0, [], digits, letterMap, combos);
    return combos;

}

// Test Cases
console.log(letterCombinations("23")); // ["ad","ae","af","bd","be","bf","cd","ce","cf"]
console.log(letterCombinations("")); // []
console.log(letterCombinations('2')); // ["a","b","c"]
