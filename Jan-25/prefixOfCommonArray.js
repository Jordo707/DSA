/*

You are given two 0-indexed integer permutations A and B of length n.

A prefix common array of A and B is an array C such that C[i] is equal to the count of numbers that are present at or before the index i in both A and B.

Return the prefix common array of A and B.

A sequence of n integers is called a permutation if it contains all integers from 1 to n exactly once.

*/

const findThePrefixCommonArray = (A, B) => {
    // Create a new array with the length of A and B, filled with 0s
    let C = new Array(A.length).fill(0);

    // loop through the length of A and B, check the number of elements that exist in both arrays up to the current index, insert the count into the new array at the current index
    for (let i = 0; i < A.length; i++) {
        C[i] = A.slice(0, i + 1).filter(num => B.slice(0, i + 1).includes(num)).length;
    }
    return C;

}

// Test Cases
console.log(findThePrefixCommonArray([1,3,2,4], [3,1,2,4])); // [0,2,3,4]
console.log(findThePrefixCommonArray([2,3,1], [3,1,2])); // [0,1,3]
