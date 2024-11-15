/*

You are given a 0-indexed integer array nums of length n.

You can perform the following operation as many times as you want:

Pick an index i that you haven’t picked before, and pick a prime p strictly less than nums[i], then subtract p from nums[i].
Return true if you can make nums a strictly increasing array using the above operation and false otherwise.

A strictly increasing array is an array whose each element is strictly greater than its preceding element.

*/

const primeSubOperator = (nums) => {
    // Helper function to check if a number is prime
    const isPrime = (num) => {
        if (num < 2) return false;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false;
        }
        return true;
    };

    // Helper function to get all primes less than a given number
    const getPrimesBelow = (num) => {
        const primes = [];
        for (let i = num - 1; i >= 2; i--) {
            if (isPrime(i)) primes.push(i);
        }
        return primes;
    };

    for (let i = 1; i < nums.length; i++) {
        // Ensure nums[i] is greater than nums[i-1]
        while (nums[i] <= nums[i - 1]) {
            // Get all primes below the current nums[i]
            const primes = getPrimesBelow(nums[i]);
            if (primes.length === 0) return false; // No prime to subtract

            // Subtract the largest prime
            nums[i] -= primes[0];
        }
    }

    return true;
};

// Test Cases
console.log(primeSubOperator([4, 9, 6, 10])); // true
console.log(primeSubOperator([6, 8, 11, 12])); // true
console.log(primeSubOperator([5, 8, 3])); // false
