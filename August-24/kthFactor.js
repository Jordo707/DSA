/*

You are given two positive integers n and k. A factor of an integer n is defined as an integer i where n % i == 0.

Consider a list of all factors of n sorted in ascending order, return the kth factor in this list or return -1 if n has less than k factors.

*/

const kthFactor = (n, k) => {
    // Initialize factor array
    let factors = [];

    // Populate factors array with all factors of n
    for (let i = n; i >= 1; i--) {
        let fac = n/i;
        if (Number.isInteger(fac)) {
            factors.push(fac)
        }
    }
    console.log(factors)
    return factors[k - 1] || -1
}

// Test Cases
console.log(kthFactor(12, 3)) // Expect 3
console.log(kthFactor(7, 2)) // Expect 7
console.log(kthFactor(4, 4)) // Expect -1
