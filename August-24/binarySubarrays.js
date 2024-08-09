/*

Given a binary array nums and an integer goal, return the number of non-empty subarrays with a sum goal.

A subarray is a contiguous part of the array.

*/

const numSubarraysWithSum = (nums, goal) => {

    
    let left1 = 0, left2 = 0;
    let sum1 = 0, sum2 = 0;
    let count = 0;

    for (let right = 0; right < nums.length; right++) {
        sum1 += nums[right];
        sum2 += nums[right];

        while (left1 <= right && sum1 > goal) {
            sum1 -= nums[left1];
            left1++;
        }

        while (left2 <= right && sum2 >= goal) {
            sum2 -= nums[left2];
            left2++;
        }

        count += left2 - left1;
    }

    return count;
}

console.log(numSubarraysWithSum([1,0,1,0,1], 2)) // Expect 4
console.log(numSubarraysWithSum([0,0,0,0,0], 0)) // Expect 15
