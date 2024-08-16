/*

Given a string containing just the characters '(' and ')', return the length of the longest valid (well-formed) parentheses substring.

*/

const longestValidParenteses = (str) => {
    const stack = [-1];
    let max_len = 0;

    for (let i = 0; i < str.length; i++) {
        if (str[i] === "(") {
            stack.push(i);
        } else {
            stack.pop();
            if (stack.length === 0) {
                stack.push(i);
            } else {
                max_len = Math.max(max_len, i - stack[stack.length - 1]);
            }
        }
    }

    return max_len;
}

// Test Cases
console.log(longestValidParenteses("(()")); // 2
console.log(longestValidParenteses(")()())")); // 4
console.log(longestValidParenteses('')); // 0
