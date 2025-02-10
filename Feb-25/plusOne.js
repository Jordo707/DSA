/*

You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.

Increment the large integer by one and return the resulting array of digits.

*/

const plusOne = (digits) => {
    // Look at the last element of the array. If it is less than 9, increment it by 1 and return the array. Otherwise, set it to 0 and continue to the next element. If the first element is set to 0, it means that all elements are 9s, so we need to add 1 to the beginning of the array.
    for (let i = digits.length - 1; i >= 0; i--) {
        if (digits[i] < 9) {
            digits[i]++;
            return digits;
        } else {
            digits[i] = 0;
        }
    }

    digits.unshift(1);
    return digits;

}

// Test cases
console.log(plusOne([1, 2, 3])); // [1, 2, 4]
console.log(plusOne([4, 3, 2, 1])); // [4, 3, 2, 2]
console.log(plusOne([9])); // [1, 0]
