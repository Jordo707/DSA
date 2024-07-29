/*

Given an integer array nums, return the length of the longest strictly increasing subsequence. This subsequence does not need to be continuous.

*/


const longestIncreasing = nums => {
    // Weed out garbage nums
    if(!nums.length) return 0;
    // Initialize longest array
    let longest = [];

    // Loop through nums, inserting each number that increases into cur. If cur is longer than longest, replace longest with cur.
    while(nums.length) {
        // (re)set cur
        cur = [];
        first = nums.shift()
        cur.push(first);
        for(let i = 0;i < nums.length;i++) {
            if(nums[i] > cur[cur.length-1]) {
                cur.push(nums[i]);
            }
        }
        if(cur.length > longest.length) {
            longest = cur;
        }
    }

    return longest.length;

}

// Test Cases
const nums1 = [10, 9, 2, 5, 3, 7, 101, 18]
console.log(longestIncreasing(nums1)) // Expect 4

const nums2 = [0, 1, 0, 3, 2, 3];
console.log(longestIncreasing(nums2)); // Expect 3

const nums3 = [7, 7, 7, 7, 7, 7, 7];
console.log(longestIncreasing(nums3)); // Expect 1

const nums4 = [3, 10, 2, 1, 20]
console.log(longestIncreasing(nums4)) // Expect 3

const nums5 = [4, 10, 4, 3, 8, 9]
console.log(longestIncreasing(nums5)) // Expect 3
