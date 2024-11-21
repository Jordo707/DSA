/*

You are given two integers m and n representing a 0-indexed m x n grid. You are also given two 2D integer arrays guards and walls where guards[i] = [rowi, coli] and walls[j] = [rowj, colj] represent the positions of the ith guard and jth wall respectively.

A guard can see every cell in the four cardinal directions (north, east, south, or west) starting from their position unless obstructed by a wall or another guard. A cell is guarded if there is at least one guard that can see it.

Return the number of unoccupied cells that are not guarded.

*/

const countUnguarded = (m, n, guards, walls) => {
    let grid = Array.from({ length: m }, () => Array(n).fill(0));
    let unguarded = 0;

    // Mark guards and walls on the grid
    for (let [x, y] of guards) {
        grid[x][y] = 'G';
    }
    for (let [x, y] of walls) {
        grid[x][y] = 'W';
    }

    // Mark cells guarded by guards
    const directions = [[0, 1], [1, 0], [0, -1], [-1, 0]];
    for (let [x, y] of guards) {
        for (let [dx, dy] of directions) {
            let nx = x + dx;
            let ny = y + dy;
            while (nx >= 0 && nx < m && ny >= 0 && ny < n && grid[nx][ny] !== 'W' && grid[nx][ny] !== 'G') {
                grid[nx][ny] = 'X';
                nx += dx;
                ny += dy;
            }
        }
    }

    // Count unguarded cells
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === 0) {
                unguarded++;
            }
        }
    }

    return unguarded;
};

// Test Cases
console.log(countUnguarded(4, 6, [[0, 0], [1, 1], [2, 3]], [[0, 0], [2, 2], [1, 4]])); // 4
console.log(countUnguarded(3, 3, [[0, 0]], [[0, 1], [1, 0], [2, 1], [1, 2]])); // 4
