/*

Given a list of non-negative integers nums, arrange them such that they form the largest number and return it.

Since the result may be very large, so you need to return a string instead of an integer.

*/

const largestNumber = nums => {
    // Convert numbers to strings
    nums = nums.map(String);

    // Sort the numbers with a custom comparator
    nums.sort((a, b) => (b + a) - (a + b));

    // Join the sorted numbers
    const result = nums.join('');

    // Handle edge case where the result might be something like '000'
    return result[0] === '0' ? '0' : result;
}

// Test Cases
console.log(largestNumber([10,2])); // "210"
console.log(largestNumber([3,30,34,5,9])); // "9534330"
