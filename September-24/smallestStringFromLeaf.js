/*

You are given the root of a binary tree where each node has a value in the range [0, 25] representing the letters 'a' to 'z'.

Return the lexicographically smallest string that starts at a leaf of this tree and ends at the root.

As a reminder, any shorter prefix of a string is lexicographically smaller.

For example, "ab" is lexicographically smaller than "aba".
A leaf of a node is a node that has no children.

*/

class TreeNode {
    constructor(val, left=null, right=null){
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

const buildTree = nodes => {
    if (!nodes || nodes.length === 0) return null;
    let root = new TreeNode(nodes[0]);
    let queue = [root];
    let i = 1;
    while (queue.length > 0 && i < nodes.length) {
        let current = queue.shift();
        if (current !== null) {
            let leftVal = nodes[i];
            i++;
            if (leftVal !== null && leftVal !== undefined) {
                let leftNode = new TreeNode(leftVal);
                current.left = leftNode;
                queue.push(leftNode);
            } else {
                current.left = null;
            }

            if (i < nodes.length) {
                let rightVal = nodes[i];
                i++;
                if (rightVal !== null && rightVal !== undefined) {
                    let rightNode = new TreeNode(rightVal);
                    current.right = rightNode;
                    queue.push(rightNode);
                } else {
                    current.right = null;
                }
            }
        }
    }
    return root;
}

const smallestFromLeaf = root => {
    if (!root) return "";
    // Check if root is an array
    if (Array.isArray(root)) {
        root = buildTree(root);
    }
    // Initialize the result
    let res = null;

    const dfs = (node, path) => {
        if (!node) return;
        // Prepend the character corresponding to node.val
        path = String.fromCharCode(97 + node.val) + path;
        if (!node.left && !node.right) {
            // It's a leaf node
            if (res === null || path < res) {
                res = path;
            }
        }
        dfs(node.left, path);
        dfs(node.right, path);
    }

    dfs(root, "");

    return res;
}

// Test Cases
console.log(smallestFromLeaf([0,1,2,3,4,3,4])); // "dba"
console.log(smallestFromLeaf([25,1,3,1,3,0,2])); // "adz"
console.log(smallestFromLeaf([2,2,1,null,1,0,null,0])); // "abc"
