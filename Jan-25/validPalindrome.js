/*

A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.

*/

const isPalindrome = s => {
    // Set a variable to the string converted to lowercase and all non-alphanumeric characters removed
    let str = s.toLowerCase().replace(/[^a-z0-9]/g, '');
    // Set a variable to the length of the string
    let n = str.length;
    // Loop through the first half of the string
    for (let i = 0; i < Math.floor(n / 2); i++) {
        // If the character at the current index is not equal to the character at the opposite index, return false
        if (str[i] !== str[n - i - 1]) {
            return false;
        }
    }
    // Return true
    return true;
}

// Test Cases
console.log(isPalindrome('A man, a plan, a canal: Panama')); // true
console.log(isPalindrome('race a car')); // false
console.log(isPalindrome("")); // true
