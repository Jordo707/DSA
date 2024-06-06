// Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands.

// An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

const numIslands = grid => {
    if(!grid || !grid.length || !grid[0].length) return 0;

    const m = grid.length;
    const n = grid[0].length;
    let islandCount = 0;

    // depth first search helper function
    const depthFirst = (row, col) => {
        if (row < 0 || col < 0 || row >= m || col >= n || grid[row][col] == 0) return;

        // mark the spot as visited
        grid[row][col] = 0;

        //visit all adjacent cells recursively
        depthFirst(row - 1, col); // up
        depthFirst(row + 1, col); // down
        depthFirst(row, col - 1); // left
        depthFirst(row, col + 1); // right
    }

    // Loop through each cell in the grid
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === '1') {
                // Each unvisited '1' is a new island
                islandCount++;
                depthFirst(i, j);
            }
        }
    }

    return islandCount
}

// test cases

let grid1 = [
    ["1","1","1","1","0"],
    ["1","1","0","1","0"],
    ["1","1","0","0","0"],
    ["0","0","0","0","0"]
  ]

let grid2 = [
    ["1","1","0","0","0"],
    ["1","1","0","0","0"],
    ["0","0","1","0","0"],
    ["0","0","0","1","1"]
  ]

console.log(numIslands(grid1)) // expect 1
console.log(numIslands(grid2)) // expect 3
