/*

The bitwise AND of an array nums is the bitwise AND of all integers in nums.

For example, for nums = [1, 5, 3], the bitwise AND is equal to 1 & 5 & 3 = 1.
Also, for nums = [7], the bitwise AND is 7.
You are given an array of positive integers candidates. Evaluate the bitwise AND of every combination of numbers of candidates. Each number in candidates may only be used once in each combination.

Return the size of the largest combination of candidates with a bitwise AND greater than 0.

*/

const largestCombination = candidates => {
    // We need to check up to the 24th bit to cover numbers up to ~16 million
    const maxBitLength = 24;
    let maxCount = 0;

    for (let i = 0; i < maxBitLength; i++) {
        let count = 0;
        for (const num of candidates) {
            if ((num >> i) & 1) {
                count++;
            }
        }
        maxCount = Math.max(maxCount, count);
    }

    return maxCount;
}

// Test Cases
console.log(largestCombination([16,17,71,62,12,24,14])); // 4
console.log(largestCombination([8,8])); // 2
