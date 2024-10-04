/*

Given an array of integers arr, replace each element with its rank.

The rank represents how large the element is. The rank has the following rules:

Rank is an integer starting from 1.
The larger the element, the larger the rank. If two elements are equal, their rank must be the same.
Rank should be as small as possible.

*/

const arrayRankTransform = arr => {
    // Create a sorted copy of the array without duplicates
    const sorted = [...new Set(arr)].sort((a, b) => a - b);

    // Create a rank map to store the rank of each number
    const rankMap = {};
    sorted.forEach((num, index) => {
        rankMap[num] = index + 1;
    });

    // Replace each element in the array with its rank
    return arr.map(num => rankMap[num]);
}

// Test Cases
console.log(arrayRankTransform([40,10,20,30])); // [4,1,2,3]
console.log(arrayRankTransform([100,100,100])); // [1,1,1]
console.log(arrayRankTransform([37,12,28,9,100,56,80,5,12])); // [5,3,4,2,8,6,7,1,3]
