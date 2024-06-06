// Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-2^31, 2^31 - 1], then return 0.

// Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

const reverse = (x) => {
    const INT_MIN = -(2 ** 31);
    const INT_MAX = (2 ** 31) - 1;

    let isNegative = x < 0;
    let reversed = 0;
    let num = Math.abs(x);

    while (num !== 0) {
        const digit = num % 10;
        num = Math.floor(num / 10); 

        // Check for overflow before actually adding the digit
        if (reversed > Math.floor(INT_MAX / 10) || (reversed === Math.floor(INT_MAX / 10) && digit > INT_MAX % 10)) {
            return 0;
        }
        if (reversed < Math.ceil(INT_MIN / 10) || (reversed === Math.ceil(INT_MIN / 10) && -digit < INT_MIN % 10)) {
            return 0;
        }

        reversed = reversed * 10 + digit;
    }

    if (isNegative) {
        reversed = -reversed;
    }

    return reversed;
}

// Test cases
console.log(reverse(123)); // expect 321
console.log(reverse(-123)); // expect -321
console.log(reverse(120)); // expect 21
console.log(reverse(901000)) // expect 109
