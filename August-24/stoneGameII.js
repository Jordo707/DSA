/*

Alice and Bob continue their games with piles of stones.  There are a number of piles arranged in a row, and each pile has a positive integer number of stones piles[i].  The objective of the game is to end with the most stones.

Alice and Bob take turns, with Alice starting first.  Initially, M = 1.

On each player's turn, that player can take all the stones in the first X remaining piles, where 1 <= X <= 2M.  Then, we set M = max(M, X).

The game continues until all the stones have been taken.

Assuming Alice and Bob play optimally, return the maximum number of stones Alice can get.

*/

const stoneGameII = piles => {

    const n = piles.length;

    const dp = Array.from({ length: n }, () => Array(n + 1).fill(0));
    const suffixSum = Array(n).fill(0);
    suffixSum[n - 1] = piles[n - 1];

    for (let i = n - 2; i >= 0; i--) {
        suffixSum[i] = suffixSum[i + 1] + piles[i];
    }

    for (let i = n - 1; i >= 0; i--) {
        for (let m = 1; m <= n; m++) {
            if (i + 2 * m >= n) {
                dp[i][m] = suffixSum[i];
            } else {
                for (let x = 1; x <= 2 * m; x++) {
                    dp[i][m] = Math.max(dp[i][m], suffixSum[i] - dp[i + x][Math.max(m, x)]);
                }
            }
        }
    }

    return dp[0][1];

}

// Test Cases
console.log(stoneGameII([2,7,9,4,4])); // 10
console.log(stoneGameII([1,2,3,4,5,100])); // 104
