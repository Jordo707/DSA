// Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.

// The overall run time complexity should be O(log (m+n)).

const findMedianSortedArrays = (nums1, nums2) => {
    // Ensure nums1 is the smaller array to reduce the search space
    if (nums1.length > nums2.length) {
        [nums1, nums2] = [nums2, nums1];
    }

    const m = nums1.length;
    const n = nums2.length;
    let low = 0;
    let high = m;

    while (low <= high) {
        const partitionX = (low + high) >> 1;
        const partitionY = ((m + n + 1) >> 1) - partitionX;

        const maxLeftX = (partitionX === 0) ? Number.NEGATIVE_INFINITY : nums1[partitionX - 1];
        const minRightX = (partitionX === m) ? Number.POSITIVE_INFINITY : nums1[partitionX];

        const maxLeftY = (partitionY === 0) ? Number.NEGATIVE_INFINITY : nums2[partitionY - 1];
        const minRightY = (partitionY === n) ? Number.POSITIVE_INFINITY : nums2[partitionY];

        if (maxLeftX <= minRightY && maxLeftY <= minRightX) {
            if ((m + n) % 2 === 0) {
                return (Math.max(maxLeftX, maxLeftY) + Math.min(minRightX, minRightY)) / 2;
            } else {
                return Math.max(maxLeftX, maxLeftY);
            }
        } else if (maxLeftX > minRightY) {
            high = partitionX - 1;
        } else {
            low = partitionX + 1;
        }
    }

    throw new Error("Input arrays are not sorted or empty");
};

// test cases
const nums1 = [1, 3]
const nums2 = [2]
const nums3 = [1, 2]
const nums4 = [3, 4]

console.log(findMedianSortedArrays(nums1, nums2)) // expect 2.0
console.log(findMedianSortedArrays(nums3, nums4)) // expect 2.5
