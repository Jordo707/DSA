/*

Given two integers dividend and divisor, divide two integers without using multiplication, division, and mod operator.

The integer division should truncate toward zero, which means losing its fractional part. For example, 8.345 would be truncated to 8, and -2.7335 would be truncated to -2.

Return the quotient after dividing dividend by divisor.

*/

const divide = (dividend, divisor) => {
    if (divisor === 0) throw new Error("Division by zero");

    // Determine Sign compatibility
    const isNegative = (dividend < 0) !== (divisor < 0);
    // Set variables to absolute values
    let absDividend = Math.abs(dividend);
    let absDivisor = Math.abs(divisor);
    let quotient = 0;

    // Increase quotient and subtract divisor from dividend until absDividend is no longer larger than absDivisor
    while (absDividend >= absDivisor) {
        absDividend -= absDivisor;
        quotient++;
    }

    // Ensure appropriate signage
    return isNegative ? -quotient : quotient;
}

// Test Cases
console.log(divide(10, 3)); // 3
console.log(divide(7, -3)); // -2
