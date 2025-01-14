/*

You are given two 0-indexed integer permutations A and B of length n.

A prefix common array of A and B is an array C such that C[i] is equal to the count of numbers that are present at or before the index i in both A and B.

Return the prefix common array of A and B.

A sequence of n integers is called a permutation if it contains all integers from 1 to n exactly once.

*/

const findThePrefixCommonArray = (A, B) => {
    // Create a new set
    let set = new Set();
    // create an answer array
    let ans = [];
    // loop through the length of A, adding each element to the set. After each cycle, initialize a count variable to 0 and loop through the elements of B. If the element is in the set, increment the count variable by 1. Add the count variable to the answer array
    for (let i = 0; i < A.length; i++) {
        set.add(A[i]);
        let count = 0;
        for (let j = 0; j <= i; j++) {
            if (set.has(B[j])) {
                count++;
            }
        }
        ans.push(count);
    }
    return ans;
}

// Test Cases
console.log(findThePrefixCommonArray([1,3,2,4], [3,1,2,4])); // [0,2,3,4]
console.log(findThePrefixCommonArray([2,3,1], [3,1,2])); // [0,1,3]
