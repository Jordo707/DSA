/*

In a gold mine grid of size m x n, each cell in this mine has an integer representing the amount of gold in that cell, 0 if it is empty.

Return the maximum amount of gold you can collect under the conditions:

Every time you are located in a cell you will collect all the gold in that cell.
From your position, you can walk one step to the left, right, up, or down.
You can't visit the same cell more than once.
Never visit a cell with 0 gold.
You can start and stop collecting gold from any position in the grid that has some gold.

*/

const getMaxGold = (grid) => {
    // Initialize the maximum gold variable
    let maxGold = 0;

    // Function to perform DFS
    const dfs = (i, j, grid) => {
        // Check boundaries and if the cell has no gold
        if (i < 0 || i >= grid.length || j < 0 || j >= grid[0].length || grid[i][j] === 0) {
            return 0;
        }

        // Collect gold from the current cell
        let curGold = grid[i][j];

        // Mark the cell as visited
        grid[i][j] = 0;

        // Explore all four directions
        const up = dfs(i - 1, j, grid);
        const down = dfs(i + 1, j, grid);
        const left = dfs(i, j - 1, grid);
        const right = dfs(i, j + 1, grid);

        // Restore the cell's gold value after exploring all paths
        grid[i][j] = curGold;

        // Return the collected gold including the current cell's gold
        return curGold + Math.max(up, down, left, right);
    }

    // Iterate through the grid
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] > 0) {
                // Start DFS from each cell that contains gold
                maxGold = Math.max(maxGold, dfs(i, j, grid));
            }
        }
    }

    return maxGold;
}

// test cases
const grid1 = [[0,6,0],
               [5,8,7],
               [0,9,0]];

const grid2 = [[1,0,7],
               [2,0,6],
               [3,4,5],
               [0,3,0],
               [9,0,20]]

console.log(getMaxGold(grid1)) // expect 24
console.log(getMaxGold(grid2)) // expect 28
