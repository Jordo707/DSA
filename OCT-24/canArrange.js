/*

Given an array of integers arr of even length n and an integer k.

We want to divide the array into exactly n / 2 pairs such that the sum of each pair is divisible by k.

Return true If you can find a way to do that or false otherwise.

*/

const canArrange = (arr, k) => {
    // Create a frequency array to count remainders when divided by k
    const remainderCount = new Array(k).fill(0);

    // Count the frequency of each remainder
    arr.forEach(num => {
        const remainder = ((num % k) + k) % k; // Handle negative remainders
        remainderCount[remainder]++;
    });

    // Check if the remainder counts can be paired
    for (let i = 1; i < k; i++) {
        if (remainderCount[i] !== remainderCount[k - i]) {
            return false; // Pair i and k-i should have the same frequency
        }
    }

    // Special case: remainder 0 should have an even count
    return remainderCount[0] % 2 === 0;
}

// Test Cases
console.log(canArrange([1,2,3,4,5,10,6,7,8,9], 5)); // true
console.log(canArrange([1,2,3,4,5,6], 7)); // true
console.log(canArrange([1,2,3,4,5,6], 10)); // false
