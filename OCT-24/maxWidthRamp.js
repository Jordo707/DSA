/*

A ramp in an integer array nums is a pair (i, j) for which i < j and nums[i] <= nums[j]. The width of such a ramp is j - i.

Given an integer array nums, return the maximum width of a ramp in nums. If there is no ramp in nums, return 0.

*/

const maxWidthRamp = nums => {
    // Create an array of tuples [value, index]
    const valueIndexPairs = nums.map((value, index) => [value, index]);

    // Sort pairs based on value (and index to break ties)
    valueIndexPairs.sort((a, b) => a[0] - b[0]);

    let maxWidth = 0;
    let minIndex = valueIndexPairs[0][1]; // Initialize with the first index of the sorted array

    for (const [value, index] of valueIndexPairs) {
      // Calculate width if index is greater than minIndex
      if (index > minIndex) {
        maxWidth = Math.max(maxWidth, index - minIndex);
      } else {
        // Update minIndex when a smaller index is found
        minIndex = index;
      }
    }

    return maxWidth;
  }

  // Test Cases
  console.log(maxWidthRamp([6,0,8,2,1,5])); // 4
  console.log(maxWidthRamp([9,8,1,0,1,9,4,0,4,1])); // 7
