/*

There are n balls on a table, each ball has a color black or white.

You are given a 0-indexed binary string s of length n, where 1 and 0 represent black and white balls, respectively.

In each step, you can choose two adjacent balls and swap them.

Return the minimum number of steps to group all the black balls to the right and all the white balls to the left.

*/

const minimumSteps = s => {
    let steps = 0;
    let countZeros = 0;
    for (let i = s.length - 1; i >= 0; i--) {
        if (s[i] === '0') {
            countZeros++;
        } else {
            steps += countZeros;
        }
    }
    return steps;
}

// Test Cases
console.log(minimumSteps('101')); // Output: 1
console.log(minimumSteps('100')); // Output: 2
console.log(minimumSteps('0111')); // Output: 0

