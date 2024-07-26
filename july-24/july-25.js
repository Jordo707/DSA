/*

Given an array of integers nums, sort the array in ascending order and return it.

You must solve the problem without using any built-in functions in O(nlog(n)) time complexity and with the smallest space complexity possible.

*/

const merge = (left, right) => {
    let result = [];
    let i = 0, j = 0;

    // Compare each element and merge them into the result array
    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            result.push(left[i]);
            i++;
        } else {
            result.push(right[j]);
            j++;
        }
    }
    return result.concat(left.slice(i)).concat(right.slice(j));
}

const mergeSort = nums => {
    if (nums.length <= 1) return nums;

    // Find the middle index
    const mid = Math.floor(nums.length / 2);
    // Recursively sort the left half
    const left = mergeSort(nums.slice(0, mid));
    // Recursively sort the right half
    const right = mergeSort(nums.slice(mid));

    // Merge the sorted halves
    return merge(left, right);
}

const sortArray = nums => {
    return mergeSort(nums)
}

// Test Cases
arr1 = [5,2,3,1]
arr2 = [5,1,1,2,0,0]
console.log(sortArray(arr1)) // Expect [1,2,3,5]
console.log(sortArray(arr2)) // Expect [0,0,1,1,2,5]
