/*

Given a triangle array, return the minimum path sum from top to bottom.

For each step, you may move to an adjacent number of the row below. More formally, if you are on index i on the current row, you may move to either index i or index i + 1 on the next row.

*/

const minimumTotal = (triangle) => {
    const n = triangle.length;
    const dp = new Array(n + 1).fill(0);

    for (let i = n - 1; i >= 0; i--) {
        for (let j = 0; j <= i; j++) {
            dp[j] = Math.min(dp[j], dp[j + 1]) + triangle[i][j];
        }
    }

    return dp[0];
}

//
let triangle = [[2],[3,4],[6,5,7],[4,1,8,3]];
console.log(minimumTotal(triangle)); // 11
triangle = [[-10]];
console.log(minimumTotal(triangle)); // -10
triangle = [[-1],[2,3],[1,-1,-3]];
console.log(minimumTotal(triangle)); // -1
