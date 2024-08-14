/*

The distance of a pair of integers a and b is defined as the absolute difference between a and b.

Given an integer array nums and an integer k, return the kth smallest distance among all the pairs nums[i] and nums[j] where 0 <= i < j < nums.length.

*/

const smallestDistancePair = (nums, k) => {
    nums.sort((a, b) => a - b);

    const countPairs = (mid) => {
        let count = 0;
        let left = 0;
        for (let right = 0; right < nums.length; right++) {
            while (nums[right] - nums[left] > mid) left++;
            count += right - left;
        }
        return count;
    };

    let low = 0;
    let high = nums[nums.length - 1] - nums[0];

    while (low < high) {
        const mid = Math.floor((low + high) / 2);
        if (countPairs(mid) < k) {
            low = mid + 1;
        } else {
            high = mid;
        }
    }

    return low;
}

// Test Cases
console.log(smallestDistancePair([1,3,1],1)); // 0
console.log(smallestDistancePair([1,1,1],2)); // 0
console.log(smallestDistancePair([1,6,1],3)); // 5
