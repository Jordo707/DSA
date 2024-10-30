/*

You may recall that an array arr is a mountain array if and only if:

arr.length >= 3
There exists some index i (0-indexed) with 0 < i < arr.length - 1 such that:
arr[0] < arr[1] < ... < arr[i - 1] < arr[i]
arr[i] > arr[i + 1] > ... > arr[arr.length - 1]
Given an integer array nums​​​, return the minimum number of elements to remove to make nums​​​ a mountain array.

*/

const minimumMountainRemovals = nums => {
    const n = nums.length;
    const lis = Array(n).fill(1);
    const lds = Array(n).fill(1);

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[i] > nums[j]) {
                lis[i] = Math.max(lis[i], lis[j] + 1);
            }
        }
    }

    for (let i = n - 1; i >= 0; i--) {
        for (let j = n - 1; j > i; j--) {
            if (nums[i] > nums[j]) {
                lds[i] = Math.max(lds[i], lds[j] + 1);
            }
        }
    }

    let maxMountainLength = 0;
    for (let i = 0; i < n; i++) {
        if (lis[i] > 1 && lds[i] > 1) {
            maxMountainLength = Math.max(maxMountainLength, lis[i] + lds[i] - 1);
        }
    }

    return n - maxMountainLength;
}

// Test Cases
console.log(minimumMountainRemovals([1,3,1])); // 0
console.log(minimumMountainRemovals([2,1,1,5,6,2,3,1])); // 3
