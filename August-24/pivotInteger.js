/*

Given a positive integer n, find the pivot integer x such that:

The sum of all elements between 1 and x inclusively equals the sum of all elements between x and n inclusively.

Return the pivot integer x. If no such integer exists, return -1. It is guaranteed that there will be at most one pivot index for the given input.

*/

const pivotInteger = n => {
    // Find the square root of the sum formula for n
    const res = (n * (n + 1) / 2) ** .5

    // Ensure the square root is an integer, returning -1 if it ist't
    if (res % 1) return -1

    return res
}

// Test cases
console.log(pivotInteger(8)) // Expect 6
console.log(pivotInteger(1)) // Expect 1
console.log(pivotInteger(4)) // Expect -1
