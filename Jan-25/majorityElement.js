/*

Given an array nums of size n, return the majority element.

The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

*/

const majorityElement = (nums) => {
    // Create a new object to store the count of each element
    let count = {};
    // Loop through the elements of the array, adding each element to the object and incrementing the count by 1
    for (let n of nums) {
        count[n] = (count[n] || 0) + 1;
    }
    // Loop through the object, returning the element with a count greater than half the length of the array
    for (let key in count) {
        if (count[key] > nums.length / 2) {
            return key;
        }
    }
    return -1;
}

// Test Cases
console.log(majorityElement([3,2,3])); // 3
console.log(majorityElement([2,2,1,1,1,2,2])); // 2
