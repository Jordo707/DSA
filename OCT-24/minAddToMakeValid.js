/*

A parentheses string is valid if and only if:

It is the empty string,
It can be written as AB (A concatenated with B), where A and B are valid strings, or
It can be written as (A), where A is a valid string.
You are given a parentheses string s. In one move, you can insert a parenthesis at any position of the string.

For example, if s = "()))", you can insert an opening parenthesis to be "(()))" or a closing parenthesis to be "())))".
Return the minimum number of moves required to make s valid.

*/

const minAddToMakeValid = s => {
    let openCount = 0;  // Track unbalanced '('
    let closeCount = 0; // Track unbalanced ')'

    for (let char of s) {
        if (char === '(') {
            openCount++;
        } else if (char === ')') {
            if (openCount > 0) {
                openCount--; // This ')' balances out one of the '('
            } else {
                closeCount++; // Unmatched ')', needs an '(' to balance
            }
        }
    }

    // Total unmatched '(' and ')' need to be added
    return openCount + closeCount;
}

// Test Cases
console.log(minAddToMakeValid('())')); // 1
console.log(minAddToMakeValid('(((')); // 3
console.log(minAddToMakeValid('()')); // 0
console.log(minAddToMakeValid('()))((')); // 4
