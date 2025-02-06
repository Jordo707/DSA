/*

You are given a sorted unique integer array nums.

A range, [a,b], is the set of all integers between a and b (inclusive).

Return the smallest sorted list of ranges that cover all the numbers in the array exactly. That is, each element of nums is covered by exactly one of the ranges, and there is no integer x such that x is in one of the ranges but not in nums.

*/

const summaryRanges = (nums) => {
    // Create an array to store the ranges
    const ranges = [];
    // Create a variable to store the start of the range
    let start = nums[0];

    // Loop through the numbers
    for (let i = 1; i < nums.length; i++) {
        // If the current number is not consecutive with the previous number
        if (nums[i] !== nums[i - 1] + 1) {
            // If the start of the range is equal to the previous number, add it to the ranges array
            if (start === nums[i - 1]) {
                ranges.push(`${start}`);
            } else {
                // Otherwise, add the range to the ranges array
                ranges.push(`${start}->${nums[i - 1]}`);
            }
            // Set the start of the range to the current number
            start = nums[i];
        }
    }

    // Add the last range to the ranges array
    if (start === nums[nums.length - 1]) {
        ranges.push(`${start}`);
    } else {
        ranges.push(`${start}->${nums[nums.length - 1]}`);
    }

    if(ranges.length) return ranges;
    else return [];
}

// Test Cases
console.log(summaryRanges([0,1,2,4,5,7])); // ["0->2","4->5","7"]
console.log(summaryRanges([0,2,3,4,6,8,9])); // ["0","2->4","6","8->9"]
