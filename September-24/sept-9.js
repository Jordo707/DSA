/*

You are given two integers m and n, which represent the dimensions of a matrix.

You are also given the head of a linked list of integers.

Generate an m x n matrix that contains the integers in the linked list presented in spiral order (clockwise), starting from the top-left of the matrix. If there are remaining empty spaces, fill them with -1.

Return the generated matrix.

*/

const spiralMatrix = (m, n, head) => {
    // Initialize the matrix with -1
    const matrix = Array.from({ length: m }, () => Array(n).fill(-1));

    // Define the boundaries for the spiral traversal
    let top = 0, bottom = m - 1, left = 0, right = n - 1;
    let idx = 0;

    // Loop through the matrix and fill it in spiral order
    while (top <= bottom && left <= right && idx < head.length) {
        // Fill from left to right along the top boundary
        for (let i = left; i <= right && idx < head.length; i++) {
            matrix[top][i] = head[idx++];
        }
        top++;

        // Fill from top to bottom along the right boundary
        for (let i = top; i <= bottom && idx < head.length; i++) {
            matrix[i][right] = head[idx++];
        }
        right--;

        // Fill from right to left along the bottom boundary
        if (top <= bottom) {
            for (let i = right; i >= left && idx < head.length; i--) {
                matrix[bottom][i] = head[idx++];
            }
            bottom--;
        }

        // Fill from bottom to top along the left boundary
        if (left <= right) {
            for (let i = bottom; i >= top && idx < head.length; i--) {
                matrix[i][left] = head[idx++];
            }
            left++;
        }
    }

    return matrix;
}

// Test Cases
console.log(spiralMatrix(3,5,[3,0,2,6,8,1,7,9,4,2,5,5,0]));
// [[3,0,2,6,8],[5,0,-1,-1,1],[5,2,4,9,7]]

console.log(spiralMatrix(1,4,[0,1,2]));
// [[0,1,2,-1]]
