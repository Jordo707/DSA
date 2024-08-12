/*

Design a class to find the kth largest element in a stream. Note that it is the kth largest element in the sorted order, not the kth distinct element.

Implement KthLargest class:

Implement the myAtoi(string s) function, which converts a string to a 32-bit signed integer.

The algorithm for myAtoi(string s) is as follows:

Whitespace: Ignore any leading whitespace (" ").
Signedness: Determine the sign by checking if the next character is '-' or '+', assuming positivity is neither present.
Conversion: Read the integer by skipping leading zeros until a non-digit character is encountered or the end of the string is reached. If no digits were read, then the result is 0.
Rounding: If the integer is out of the 32-bit signed integer range [-231, 231 - 1], then round the integer to remain in the range. Specifically, integers less than -231 should be rounded to -231, and integers greater than 231 - 1 should be rounded to 231 - 1.
Return the integer as the final result.
*/

const myAtoi = s => {
    // Remove leading whitespace
    s = s.trim();

    // Determine sign
    let sign = 1;
    let i = 0;
    if (s[i] === '-' || s[i] === '+') {
        sign = s[i] === '-' ? -1 : 1;
        i++;
    }

    // Read digits
    let num = 0;
    while (i < s.length && isDigit(s[i])) {
        num = num * 10 + parseInt(s[i]);
        i++;
    }

    // Handle rounding
    const INT_MAX = Math.pow(2, 31) - 1;
    const INT_MIN = -Math.pow(2, 31);
    num = Math.min(Math.max(num * sign, INT_MIN), INT_MAX);

    // Return result
    return num;
};

// Helper function to check if a character is a digit
const isDigit = c => {
    return c >= '0' && c <= '9';
};

// Test Cases
console.log(myAtoi('42')); // Expect 42
console.log(myAtoi('-042')); // Expect -42
console.log(myAtoi('1337c0d3')); // Expect 1337
console.log(myAtoi('0-1')); // Expect 0
console.log(myAtoi('words and 987')); // Expect 0
