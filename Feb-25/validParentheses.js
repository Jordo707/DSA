/*

Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.

*/

const isValid = (s) => {
    const stack = [];
    const pairs = {
        '(': ')',
        '{': '}',
        '[': ']',
    };

    for (let i = 0; i < s.length; i++) {
        if (pairs[s[i]]) {
        stack.push(s[i]);
        } else if (s[i] !== pairs[stack.pop()]) {
        return false;
        }
    }

    return stack.length === 0;
}

// Test cases
console.log(isValid("()")); // true
console.log(isValid("()[]{}")); // true
console.log(isValid("(]")); // false
console.log(isValid("([)]")); // false
