// You are given row x col grid representing a map where grid[i][j] = 1 represents land and grid[i][j] = 0 represents water.

// Grid cells are connected horizontally/vertically (not diagonally). The grid is completely surrounded by water, and there is exactly one island (i.e., one or more connected land cells).

// The island doesn't have "lakes", meaning the water inside isn't connected to the water around the island. One cell is a square with side length 1. The grid is rectangular, width and height don't exceed 100. Determine the perimeter of the island.

const islandPerimeter = grid => {
    let perimeter = 0;
    const rows = grid.length
    const columns = grid[0].length;

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < columns; j++) {
            if(grid[i][j] == 1) {
                // check top, left, right, and bottom
                // top
                if (i == 0 || grid[i - 1][j] == 0) perimeter++;
                // left
                if (j == 0 || grid[i][j - 1] == 0) perimeter++;
                // right
                if (j == columns - 1 || grid[i][j + 1] == 0) perimeter++;
                // bottom
                if (i == rows - 1 || grid[i + 1][j] == 0) perimeter++;
            }
        }
    }

    return perimeter
}

// Test cases
const grid1 = [[0,1,0,0],[1,1,1,0],[0,1,0,0],[1,1,0,0]]
const grid2 = [[1]]
const grid3 = [[1,0]]

console.log(islandPerimeter(grid1)) // expect 16
console.log(islandPerimeter(grid2)) // expect 4
console.log(islandPerimeter(grid3)) // expect 4
