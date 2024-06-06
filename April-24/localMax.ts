/*
You are given an n x n integer matrix grid.

Generate an integer matrix maxLocal of size (n - 2) x (n - 2) such that:

maxLocal[i][j] is equal to the largest value of the 3 x 3 matrix in grid centered around row i + 1 and column j + 1.
In other words, we want to find the largest value in every contiguous 3 x 3 matrix in grid.

Return the generated matrix.
*/
function largestLocal(grid: number[][]): number[][] {
    const n = grid.length;
    const maxLocal: number[][] = Array.from({ length: n - 2 }, () => new Array(n - 2).fill(0));

    // Iterate through each cell in the (n-2) x (n-2) target matrix
    for (let i = 0; i < n - 2; i++) {
        for (let j = 0; j < n - 2; j++) {
            // Compute the maximum value in the 3x3 grid centered at (i + 1, j + 1)
            let maxVal = -Infinity;
            for (let di = 0; di < 3; di++) {
                for (let dj = 0; dj < 3; dj++) {
                    maxVal = Math.max(maxVal, grid[i + di][j + dj]);
                }
            }
            maxLocal[i][j] = maxVal;
        }
    }

    return maxLocal;
}

const grid = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16]
];

console.log(largestLocal(grid));
/*
[
  [11, 12],
  [15, 16]
]
*/
