/*

You are given a 0-indexed m x n matrix grid consisting of positive integers.

You can start at any cell in the first column of the matrix, and traverse the grid in the following way:

From a cell (row, col), you can move to any of the cells: (row - 1, col + 1), (row, col + 1) and (row + 1, col + 1) such that the value of the cell you move to, should be strictly bigger than the value of the current cell.
Return the maximum number of moves that you can perform.

*/

const maxMoves = grid => {
    const m = grid.length;
    const n = grid[0].length;

    // Memoization table to store the maximum moves from each cell
    const memo = Array.from({ length: m }, () => Array(n).fill(-1));

    // DFS function to calculate maximum moves from (row, col)
    const dfs = (row, col) => {
        // If we've reached the last column, we can't make further moves
        if (col === n - 1) return 0;

        // Return memoized result if we've already computed it
        if (memo[row][col] !== -1) return memo[row][col];

        let maxMovesFromCell = 0;

        // Possible moves: (row - 1, col + 1), (row, col + 1), (row + 1, col + 1)
        for (let [dr, dc] of [[-1, 1], [0, 1], [1, 1]]) {
            const newRow = row + dr;
            const newCol = col + dc;

            // Check if the new cell is within bounds and has a strictly greater value
            if (newRow >= 0 && newRow < m && newCol < n && grid[newRow][newCol] > grid[row][col]) {
                maxMovesFromCell = Math.max(maxMovesFromCell, 1 + dfs(newRow, newCol));
            }
        }

        // Store the result in the memoization table
        memo[row][col] = maxMovesFromCell;
        return maxMovesFromCell;
    };

    let maxMoves = 0;
    // Start from each cell in the first column
    for (let row = 0; row < m; row++) {
        maxMoves = Math.max(maxMoves, dfs(row, 0));
    }

    return maxMoves;
};

// Test Cases
console.log(maxMoves([[2,4,3,5],[5,4,9,3],[3,4,2,11],[10,9,13,15]])); // 3
console.log(maxMoves([[3,2,4],[2,1,9],[1,1,7]])); // 0
