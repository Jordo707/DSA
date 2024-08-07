/*

A distinct string is a string that is present only once in an array.

Given an array of strings arr, and an integer k, return the kth distinct string present in arr. If there are fewer than k distinct strings, return an empty string "".

Note that the strings are considered in the order in which they appear in the array.

*/

const kthDistinct = (arr, k) => {
    let distinctCount = 0;
    for (let i = 0; i < arr.length; i++) {
        if (isDistinct(arr, i)) {
            distinctCount++;
            if (distinctCount === k) {
                return arr[i]
            }
        }
    }
    return ""
}
const isDistinct = (arr, index) => {
    return arr.filter(s => s === arr[index]).length === 1;
}

// Test Cases
const arr1 = ["d","b","c","b","c","a"];
const arr2 = ["aaa","aa","a"];
const arr3 = ["a","b","a"];

console.log(kthDistinct(arr1, 2)) // Expect "a"
console.log(kthDistinct(arr2, 1)) // Expect "aaa"
console.log(kthDistinct(arr3, 3)) // Expect ""
