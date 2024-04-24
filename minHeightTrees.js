/*

A tree is an undirected graph in which any two vertices are connected by exactly one path. In other words, any connected graph without simple cycles is a tree.

Given a tree of n nodes labelled from 0 to n - 1, and an array of n - 1 edges where edges[i] = [ai, bi] indicates that there is an undirected edge between the two nodes ai and bi in the tree, you can choose any node of the tree as the root. When you select a node x as the root, the result tree has height h. Among all possible rooted trees, those with minimum height (i.e. min(h))  are called minimum height trees (MHTs).

Return a list of all MHTs' root labels. You can return the answer in any order.

The height of a rooted tree is the number of edges on the longest downward path between the root and a leaf.

*/

const findMinHeightTrees = (n, edges) => {
    if (n == 1) return [0];
    if (n == 2) return edges[0];

    const adjList = new Array(n).fill(0).map(() => [])
    const degree = new Array(n).fill(0);

    for (const [a,b] of edges) {
        adjList[a].push(b);
        adjList[b].push(a);
        degree[a]++;
        degree[b]++;
    }

    let leaves = [];
    for (let i = 0; i < n; i++) {
        if (degree[i] === 1) leaves.push(i)
    }

        while (n > 2) {
            const newLeaves = [];
            const leavesSize = leaves.length;
            n -= leavesSize;

            for (const leaf in leaves) {
                for (const neighbor of adjList[leaf]) {
                    degree[neighbor]--;
                    if (degree[neighbor] === 1) {
                        newLeaves.push(neighbor);
                    }
                }
            }
            leaves = newLeaves;
        }

    return leaves;
}

// test cases
n1 = 4;
n2 = 6;
edges1 = [[1,0],[1,2],[1,3]];
edges2 = [[3,0],[3,1],[3,2],[3,4],[5,4]];

console.log(findMinHeightTrees(n1,edges1)); // expect [1]
console.log(findMinHeightTrees(n2,edges2)); // expect [3,4]
