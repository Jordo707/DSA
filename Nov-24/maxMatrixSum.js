/*

You are given an n x n integer matrix. You can do the following operation any number of times:

Choose any two adjacent elements of matrix and multiply each of them by -1.
Two elements are considered adjacent if and only if they share a border.

Your goal is to maximize the summation of the matrix's elements. Return the maximum sum of the matrix's elements using the operation mentioned above.

*/

const maxMatrixSum = (matrix) => {
    let negCount = 0;
    let min = Infinity;
    let sum = 0;

    for (let row of matrix) {
        for (let num of row) {
            sum += Math.abs(num);
            if (num < 0) {
                negCount++;
            }
            min = Math.min(min, Math.abs(num));
        }
    }

    return negCount % 2 === 0 ? sum : sum - 2 * min;
}

// Test Cases
console.log(maxMatrixSum([[1,-1],[-1,1]])); // 4
console.log(maxMatrixSum([[1,2,3],[-1,-2,-3],[1,2,3]])); // 16
