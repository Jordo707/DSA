/*

Given the root of a binary tree, replace the value of each node in the tree with the sum of all its cousins' values.

Two nodes of a binary tree are cousins if they have the same depth with different parents.

Return the root of the modified tree.

Note that the depth of a node is the number of edges in the path from the root node to it.

*/

class TreeNode {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

function buildTree(arr) {
    if (!arr.length) return null;
    let nodes = arr.map(val => (val !== null ? new TreeNode(val) : null));
    for (let i = 0, j = 1; j < nodes.length; i++) {
        if (nodes[i]) {
            if (j < nodes.length) {
                nodes[i].left = nodes[j++];
            }
            if (j < nodes.length) {
                nodes[i].right = nodes[j++];
            }
        }
    }
    return nodes[0];
}

function serializeTree(root) {
    if (!root) return [];
    let res = [];
    let queue = [root];
    while (queue.length) {
        let node = queue.shift();
        if (node) {
            res.push(node.val);
            queue.push(node.left);
            queue.push(node.right);
        } else {
            res.push(null);
        }
    }
    // Remove trailing nulls
    while (res[res.length - 1] === null) {
        res.pop();
    }
    return res;
}

const replaceValueInTree = root => {
    if (!root) return null;
    let queue = [[root, null]];
    while (queue.length) {
        let levelSize = queue.length;
        let levelNodes = [];
        let totalSum = 0;
        let parentToSum = new Map();
        for (let i = 0; i < levelSize; i++) {
            let [node, parent] = queue.shift();
            levelNodes.push({ node, parent });
            totalSum += node.val;
            if (node.left) {
                queue.push([node.left, node]);
            }
            if (node.right) {
                queue.push([node.right, node]);
            }
        }
        // Calculate the sum of siblings for each parent
        for (let { node, parent } of levelNodes) {
            parentToSum.set(parent, (parentToSum.get(parent) || 0) + node.val);
        }
        // Update node values with sum of cousins
        for (let { node, parent } of levelNodes) {
            let sumSiblings = parentToSum.get(parent);
            let sumCousins = totalSum - sumSiblings;
            node.val = sumCousins;
        }
    }
    return root;
};

// Test Cases
let root1 = buildTree([5, 4, 9, 1, 10, null, 7]);
let modifiedRoot1 = replaceValueInTree(root1);
console.log(serializeTree(modifiedRoot1)); // [0, 0, 0, 7, 7, null, 11]

let root2 = buildTree([3, 1, 2]);
let modifiedRoot2 = replaceValueInTree(root2);
console.log(serializeTree(modifiedRoot2)); // [0, 0, 0]
