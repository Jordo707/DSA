/*

You are given a string s consisting only of uppercase English letters.

You can apply some operations to this string where, in one operation, you can remove any occurrence of one of the substrings "AB" or "CD" from s.

Return the minimum possible length of the resulting string that you can obtain.

Note that the string concatenates after removing the substring and could produce new "AB" or "CD" substrings.

*/

const minLength = s => {
    const stack = [];

    for (let char of s) {
        // Check if the stack is not empty and the top of the stack forms "AB" or "CD" with the current character
        if (stack.length && (
            (stack[stack.length - 1] === 'A' && char === 'B') ||
            (stack[stack.length - 1] === 'C' && char === 'D')
        )) {
            stack.pop(); // Remove the last character in stack
        } else {
            stack.push(char); // Add the current character to the stack
        }
    }

    // The length of the stack represents the minimum possible length of the resulting string
    return stack.length;
}

// Test Cases
console.log(minLength('ABFCACDB')); // 2
console.log(minLength('ACBBD')); // 5
