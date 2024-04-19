// Given an integer x, return true if x is apalindrome, and false otherwise.

const isPalindrome = x => {
    // negative numbers are not palindromes
    if (x < 0) return false;

    // calculate the reverse of the number
    let reversed = 0;
    let original = x;
    while (x > 0) {
        reversed = reversed * 10 + x % 10;
        x = Math.floor(x / 10);
    }

    // compare reversed to original
    return original === reversed;
}

console.log(isPalindrome(1211121)); // expect true
console.log(isPalindrome(123321)); // expect true
console.log(isPalindrome(121123)); // expect false
console.log(isPalindrome(12345)); // expect false
console.log(isPalindrome(-309)); // expect false
