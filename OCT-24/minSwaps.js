/*

You are given a 0-indexed string s of even length n. The string consists of exactly n / 2 opening brackets '[' and n / 2 closing brackets ']'.

A string is called balanced if and only if:

It is the empty string, or
It can be written as AB, where both A and B are balanced strings, or
It can be written as [C], where C is a balanced string.
You may swap the brackets at any two indices any number of times.

Return the minimum number of swaps to make s balanced.

*/

const minSwaps = s => {
    let balance = 0;
    let minSwaps = 0;

    for (let char of s) {
        if (char === '[') {
            balance += 1;
        } else { // char === ']'
            balance -= 1;
        }

        // If balance is negative, it means there are more `]` than `[`
        if (balance < 0) {
            minSwaps += 1; // Need one swap for this imbalance
            balance = 0;   // Reset balance after swap
        }
    }

    return minSwaps;
}

// Test Cases
console.log(minSwaps('][][')); // 1
console.log(minSwaps(']]][[[')); // 2
console.log(minSwaps('[]')); // 0
