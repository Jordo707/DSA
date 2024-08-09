/*

A 3 x 3 magic square is a 3 x 3 grid filled with distinct numbers from 1 to 9 such that each row, column, and both diagonals all have the same sum.

Given a row x col grid of integers, how many 3 x 3 contiguous magic square subgrids are there?

Note: while a magic square can only contain numbers from 1 to 9, grid may contain numbers up to 15.

*/

const numMagicSquaresInside = grid => {
    const isMagicSquare = (i, j) => {
        // Check all numbers are distinct and between 1 and 9
        const s = new Set();
        for (let x = i; x < i + 3; x++) {
            for (let y = j; y < j + 3; y++) {
                let num = grid[x][y];
                if (num < 1 || num > 9 || s.has(num)) return false;
                s.add(num);
            }
        }

        // Check the sums of rows, columns, and diagonals
        return (
            grid[i][j] + grid[i][j+1] + grid[i][j+2] === 15 &&
            grid[i+1][j] + grid[i+1][j+1] + grid[i+1][j+2] === 15 &&
            grid[i+2][j] + grid[i+2][j+1] + grid[i+2][j+2] === 15 &&
            grid[i][j] + grid[i+1][j] + grid[i+2][j] === 15 &&
            grid[i][j+1] + grid[i+1][j+1] + grid[i+2][j+1] === 15 &&
            grid[i][j+2] + grid[i+1][j+2] + grid[i+2][j+2] === 15 &&
            grid[i][j] + grid[i+1][j+1] + grid[i+2][j+2] === 15 &&
            grid[i][j+2] + grid[i+1][j+1] + grid[i+2][j] === 15
        );
    };

    let row = grid.length;
    let col = grid[0].length;
    let count = 0;

    for (let i = 0; i <= row - 3; i++) {
        for (let j = 0; j <= col - 3; j++) {
            if (isMagicSquare(i, j)) count++;
        }
    }

    return count;
}

// Test Cases
console.log(numMagicSquaresInside([[4,3,8,4],
                                   [9,5,1,9],
                                   [2,7,6,2]])) // Expect 1

console.log(numMagicSquaresInside([[8]])) // Expect 0

console.log(numMagicSquaresInside([[8, 1, 6],
                                   [3, 5, 7],
                                   [4, 9, 2]])) // Expect 1
