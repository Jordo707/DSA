/*

There are n cities numbered from 0 to n-1. Given the array edges where edges[i] = [fromi, toi, weighti] represents a bidirectional and weighted edge between cities fromi and toi, and given the integer distanceThreshold.

Return the city with the smallest number of cities that are reachable through some path and whose distance is at most distanceThreshold, If there are multiple such cities, return the city with the greatest number.

Notice that the distance of a path connecting cities i and j is equal to the sum of the edges' weights along that path.

*/

const findTheCity = (n, edges, distanceThreshold) => {
    const INF = Number.MAX_SAFE_INTEGER;
    const dist = Array.from({ length: n }, () => Array(n).fill(INF));

    // Initialize the distance matrix
    for (let i = 0; i < n; i++) {
        dist[i][i] = 0;
    }

    for (const [from, to, weight] of edges) {
        dist[from][to] = weight;
        dist[to][from] = weight;
    }

    // Apply Floyd-Warshall Algorithm
    for (let k = 0; k < n; k++) {
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < n; j++) {
                if (dist[i][k] !== INF && dist[k][j] !== INF) {
                    dist[i][j] = Math.min(dist[i][j], dist[i][k] + dist[k][j]);
                }
            }
        }
    }

    // Find the city with the smallest number of reachable cities within the threshold
    let resultCity = -1;
    let minReachableCount = INF;

    for (let i = 0; i < n; i++) {
        let reachableCount = 0;
        for (let j = 0; j < n; j++) {
            if (i !== j && dist[i][j] <= distanceThreshold) {
                reachableCount++;
            }
        }

        if (reachableCount < minReachableCount || (reachableCount === minReachableCount && i > resultCity)) {
            minReachableCount = reachableCount;
            resultCity = i;
        }
    }

    return resultCity;
}

// Test Cases
const n1 = 4
const edges1 = [[0,1,3],[1,2,1],[1,3,4],[2,3,1]]
const distanceThreshold1 = 4
console.log(findTheCity(n1,edges1,distanceThreshold1)) // 3

const n2 = 5
const edges2 = [[0,1,2],[0,4,8],[1,2,3],[1,4,2],[2,3,1],[3,4,1]]
const distanceThreshold2 = 2
console.log(findTheCity(n2,edges2,distanceThreshold2)) // 0
