/*

You start at the cell (rStart, cStart) of an rows x cols grid facing east. The northwest corner is at the first row and column in the grid, and the southeast corner is at the last row and column.

You will walk in a clockwise spiral shape to visit every position in this grid. Whenever you move outside the grid's boundary, we continue our walk outside the grid (but may return to the grid boundary later.). Eventually, we reach all rows * cols spaces of the grid.

Return an array of coordinates representing the positions of the grid in the order you visited them.

*/

const spiralMatrixIII = (rows, cols, rStart, cStart) => {
    const result = [];
    const directions = [[0, 1], [1, 0], [0, -1], [-1, 0]];
    let steps = 1;
    let dirIndex = 0;
    let r = rStart, c = cStart;

    result.push([r, c]);

    while (result.length < rows * cols) {
        for (let i = 0; i < 2; i++) {
            for (let j = 0; j < steps; j++) {
                r += directions[dirIndex][0];
                c += directions[dirIndex][1];
                if (r >= 0 && r < rows && c >= 0 && c < cols) {
                    result.push([r, c]);
                }
            }
            dirIndex = (dirIndex + 1) % 4;
        }
        steps++;
    }

    return result;
}

// Test Cases
console.log(spiralMatrixIII(1, 4, 0, 0)) // Expect [[0,0],[0,1],[0,2],[0,3]]
console.log(spiralMatrixIII(5, 6, 1, 4)) // Expect [[1,4],[1,5],[2,5],[2,4],[2,3],[1,3],[0,3],[0,4],[0,5],[3,5],[3,4],[3,3],[3,2],[2,2],[1,2],[0,2],[4,5],[4,4],[4,3],[4,2],[4,1],[3,1],[2,1],[1,1],[0,1],[4,0],[3,0],[2,0],[1,0],[0,0]]
