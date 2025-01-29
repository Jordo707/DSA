/*

Given an integer array nums and an integer k, return true if there are two distinct indices i and j in the array such that nums[i] == nums[j] and abs(i - j) <= k.

*/


const containsNearbyDuplicate = (nums, k) => {
    // Create a map to store the indices of the numbers
    const map = new Map();
    // Loop through the numbers
    for (let i = 0; i < nums.length; i++) {
        // If the number is in the map and the difference between the indices is less than or equal to k, return true
        if (map.has(nums[i]) && i - map.get(nums[i]) <= k) {
            return true;
        }
        // Add the number and its index to the map
        map.set(nums[i], i);
    }
    // Return false if no such indices are found
    return false;
}

// Test Cases
console.log(containsNearbyDuplicate([1,2,3,1], 3)); // true
console.log(containsNearbyDuplicate([1,0,1,1], 1)); // true
console.log(containsNearbyDuplicate([1,2,3,1,2,3], 2)); // false
