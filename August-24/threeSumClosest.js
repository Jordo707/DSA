/*

Given an integer array nums of length n and an integer target, find three integers in nums such that the sum is closest to target.

Return the sum of the three integers.

You may assume that each input would have exactly one solution.

*/

const threeSumClosest = (nums, target) => {
    // Sort the array in ascending order
    nums.sort((a, b) => a - b);

    // Initialize variables to store the closest sum and the minimum difference
    let closestSum = Infinity;
    let minDiff = Infinity;

    // Iterate through the array
    for (let i = 0; i < nums.length - 2; i++) {
        // Fix the first number in the triplet
        let firstNum = nums[i];

        // Use two pointers approach for the remaining subarray
        let left = i + 1;
        let right = nums.length - 1;

        while (left < right) {
            // Calculate the sum of the triplet
            let sum = firstNum + nums[left] + nums[right];

            // Calculate the difference between the sum and the target
            let diff = Math.abs(sum - target);

            // Update the closest sum and the minimum difference if necessary
            if (diff < minDiff) {
                minDiff = diff;
                closestSum = sum;
            }

            // Move the pointers based on the sum
            if (sum < target) {
                left++;
            } else {
                right--;
            }
        }
    }

    return closestSum;
}

// Test Cases
console.log(threeSumClosest([-1,2,1,-4], 1)); // Expect 2
console.log(threeSumClosest([0,0,0], 1)); // Expect 0
