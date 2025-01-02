/*

Given a sorted array, convert it into a height-balanced binary search tree.

*/

class TreeNode {
    constructor(val = 0, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

const sortedArrayToBST = (nums) => {
    const buildTree = (left, right) => {
        if (left > right) {
            return null;
        }

        const mid = Math.floor((left + right) / 2);
        const node = new TreeNode(nums[mid]);
        node.left = buildTree(left, mid - 1);
        node.right = buildTree(mid + 1, right);

        return node;
    };

    return buildTree(0, nums.length - 1);
}

// Test cases
const nums = [-10, -3, 0, 5, 9];
const bst = sortedArrayToBST(nums);

const printTree = (node) => {
    if (!node) return null;
    return {
        val: node.val,
        left: printTree(node.left),
        right: printTree(node.right),
    };
};

console.log(printTree(bst));
// Output:
/*

{
    val: 0,
    left: {
        val: -10,
        right: { val: -3, left: null, right: null },
        left: null,
    },
    right: {
        val: 5,
        right: { val: 9, left: null, right: null },
        left: null,
    },
}


*/
