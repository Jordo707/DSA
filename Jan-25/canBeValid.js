/*

A parentheses string is a non-empty string consisting only of '(' and ')'. It is valid if any of the following conditions is true:

It is ().
It can be written as AB (A concatenated with B), where A and B are valid parentheses strings.
It can be written as (A), where A is a valid parentheses string.
You are given a parentheses string s and a string locked, both of length n. locked is a binary string consisting only of '0's and '1's. For each index i of locked,

If locked[i] is '1', you cannot change s[i].
But if locked[i] is '0', you can change s[i] to either '(' or ')'.
Return true if you can make s a valid parentheses string. Otherwise, return false.

*/

const canBeValid = (s, locked) => {
    let open = 0, close = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') {
        open++;
        } else if (s[i] === ')') {
        close++;
        }
    }
    let diff = Math.abs(open - close);
    let openLocked = 0, closeLocked = 0;
    for (let i = 0; i < s.length; i++) {
        if (locked[i] === '1') {
        if (s[i] === '(') {
            openLocked++;
        } else if (s[i] === ')') {
            closeLocked++;
        }
        }
    }
    let diffLocked = Math.abs(openLocked - closeLocked);
    let diffTotal = Math.abs(diff - diffLocked);
    if (diffTotal % 2 === 0) {
        return true;
    }
    return false;
}

// Test Cases
let s = "))()))", locked = "010100";
console.log(canBeValid(s, locked)); // true
s = "()()", locked = "0000";
console.log(canBeValid(s, locked)); // true
s = ")", locked = "0";
console.log(canBeValid(s, locked)); // false
