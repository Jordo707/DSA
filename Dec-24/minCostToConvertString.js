/*

You are given two 0-indexed strings source and target, both of length n and consisting of lowercase English letters. You are also given two 0-indexed character arrays original and changed, and an integer array cost, where cost[i] represents the cost of changing the character original[i] to the character changed[i].

You start with the string source. In one operation, you can pick a character x from the string and change it to the character y at a cost of z if there exists any index j such that cost[j] == z, original[j] == x, and changed[j] == y.

Return the minimum cost to convert the string source to the string target using any number of operations. If it is impossible to convert source to target, return -1.

Note that there may exist indices i, j such that original[j] == original[i] and changed[j] == changed[i].

*/

const minimumCost = (source, target, original, changed, cost) => {
    const n = source.length;
    if (n !== target.length) return -1;

    const INF = Number.MAX_SAFE_INTEGER;

    // Step 1: Initialize a 26x26 cost matrix with INF
    const dist = Array.from({ length: 26 }, () => Array(26).fill(INF));
    for (let i = 0; i < 26; i++) dist[i][i] = 0; // Cost to transform a letter into itself is 0

    // Step 2: Fill in the direct transformation costs
    for (let i = 0; i < original.length; i++) {
        const from = original[i].charCodeAt(0) - 'a'.charCodeAt(0);
        const to = changed[i].charCodeAt(0) - 'a'.charCodeAt(0);
        dist[from][to] = Math.min(dist[from][to], cost[i]); // Use the minimal cost if multiple are given
    }

    // Step 3: Apply Floyd-Warshall to compute all-pairs shortest paths
    for (let k = 0; k < 26; k++) {
        for (let i = 0; i < 26; i++) {
            for (let j = 0; j < 26; j++) {
                if (dist[i][k] < INF && dist[k][j] < INF) {
                    dist[i][j] = Math.min(dist[i][j], dist[i][k] + dist[k][j]);
                }
            }
        }
    }

    // Step 4: Compute the total cost to transform source into target
    let totalCost = 0;
    for (let i = 0; i < n; i++) {
        const from = source[i].charCodeAt(0) - 'a'.charCodeAt(0);
        const to = target[i].charCodeAt(0) - 'a'.charCodeAt(0);

        if (dist[from][to] === INF) {
            return -1; // Impossible to transform
        }
        totalCost += dist[from][to];
    }

    return totalCost;
};


// Test Cases
console.log(minimumCost('abcd', 'acbe', ['a', 'b', 'c', 'c', 'e', 'd'], ['b', 'c', 'b', 'e', 'b', 'e'], [2,5,5,1,2,20])) // 28
