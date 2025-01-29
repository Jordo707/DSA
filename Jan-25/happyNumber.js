/*

Write an algorithm to determine if a number n is happy.

A happy number is a number defined by the following process:

Starting with any positive integer, replace the number by the sum of the squares of its digits.
Repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1.
Those numbers for which this process ends in 1 are happy.
Return true if n is a happy number, and false if not.

*/

const isHappy = (n) => {
    // Create a variable to store the seen numbers
    const seen = new Set();
    // Loop through the number
    while (n !== 1 && !seen.has(n)) {
        // Add the number to the seen set
        seen.add(n);
        // Create a variable to store the sum of the squares of the digits
        let sum = 0;
        // Loop through the digits of the number
        while (n > 0) {
            // Get the last digit of the number
            const digit = n % 10;
            // Add the square of the digit to the sum
            sum += digit * digit;
            // Remove the last digit from the number
            n = Math.floor(n / 10);
        }
        // Set n to the sum of the squares of the digits
        n = sum;
    }
    // Return true if n is equal to 1, false otherwise
    return n === 1;
}

// Test Cases
console.log(isHappy(19)); // true
console.log(isHappy(2)); // false
