/*

You are given a 0-indexed integer array nums and a positive integer k.

You can apply the following operation on the array any number of times:

Choose any element of the array and flip a bit in its binary representation. Flipping a bit means changing a 0 to 1 or vice versa.
Return the minimum number of operations required to make the bitwise XOR of all elements of the final array equal to k.

Note that you can flip leading zero bits in the binary representation of elements. For example, for the number (101)2 you can flip the fourth bit and obtain (1101)2.

*/

const minOperations = (nums, k) => {
    // Step 1: Calculate the current XOR of the entire array
    let currentXOR = 0;
    for (const num of nums) {
        currentXOR ^= num;
    }

    // Step 2: Find the XOR that needs to be fixed to make the XOR equal to k
    const targetXOR = currentXOR ^ k;

    // Step 3: Count the number of 1s in the binary representation of targetXOR
    let flips = 0;
    let xor = targetXOR;

    while (xor > 0) {
        flips += xor & 1; // Add 1 if the least significant bit is 1
        xor >>= 1;        // Shift right by 1 bit to check the next bit
    }

    // Return the number of bit flips required
    return flips;
}

// Test Cases
console.log(minOperations([2,1,3,4], 1)); // 2
console.log(minOperations([2,0,2,0], 0)); // 0
