/*

For a binary tree T, we can define a flip operation as follows: choose any node, and swap the left and right child subtrees.

A binary tree X is flip equivalent to a binary tree Y if and only if we can make X equal to Y after some number of flip operations.

Given the roots of two binary trees root1 and root2, return true if the two trees are flip equivalent or false otherwise.

*/

class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

function buildTree(arr) {
    if (!arr.length || arr[0] === null) return null;
    let root = new TreeNode(arr[0]);
    let queue = [root];
    let i = 1;
    while (queue.length && i < arr.length) {
        let current = queue.shift();
        if (current !== null) {
            let leftVal = arr[i++];
            if (leftVal !== null && leftVal !== undefined) {
                current.left = new TreeNode(leftVal);
                queue.push(current.left);
            } else {
                current.left = null;
            }
            if (i >= arr.length) break;
            let rightVal = arr[i++];
            if (rightVal !== null && rightVal !== undefined) {
                current.right = new TreeNode(rightVal);
                queue.push(current.right);
            } else {
                current.right = null;
            }
        }
    }
    return root;
}

const flipEquiv = (root1, root2) => {
    if (root1 === null && root2 === null) return true;
    if (root1 === null || root2 === null) return false;
    if (root1.val !== root2.val) return false;
    return (
        (flipEquiv(root1.left, root2.left) && flipEquiv(root1.right, root2.right)) ||
        (flipEquiv(root1.left, root2.right) && flipEquiv(root1.right, root2.left))
    );
}

// Test Cases
let root1 = buildTree([1,2,3,4,5,6,null,null,null,7,8]);
let root2 = buildTree([1,3,2,null,6,4,5,null,null,null,null,8,7]);
console.log(flipEquiv(root1, root2)); // true

console.log(flipEquiv(buildTree([]), buildTree([]))); // true

console.log(flipEquiv(buildTree([]), buildTree([1]))); // false
