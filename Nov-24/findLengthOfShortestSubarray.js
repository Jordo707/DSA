/*

Given an integer array arr, remove a subarray (can be empty) from arr such that the remaining elements in arr are non-decreasing.

Return the length of the shortest subarray to remove.

A subarray is a contiguous subsequence of the array.

*/

const findLengthOfShortestSubarray = (arr) => {
    // Find the longest non-decreasing prefix
    let i = 0;
    while (i + 1 < arr.length && arr[i] <= arr[i + 1]) i++;

    // Find the longest non-decreasing suffix
    let j = arr.length - 1;
    while (j - 1 >= 0 && arr[j - 1] <= arr[j]) j--;

    // If the entire array is non-decreasing, return 0
    if (i === arr.length - 1) return 0;

    // Initialize the shortest subarray to remove
    let min = Math.min(arr.length - i - 1, j);

    // Iterate through the prefix and suffix
    for (let k = 0; k <= i; k++) {
        if (arr[k] <= arr[j]) {
            min = Math.min(min, j - k - 1);
        } else {
            j++;
        }
    }

    return min;
}

// Test Cases
console.log(findLengthOfShortestSubarray([1, 2, 3, 10, 4, 2, 3, 5])); // 3
console.log(findLengthOfShortestSubarray([5, 4, 3, 2, 1])); // 4
console.log(findLengthOfShortestSubarray([1, 2, 3])); // 0
