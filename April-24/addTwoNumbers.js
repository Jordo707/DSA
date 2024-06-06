// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

const { List } = require("mocha/lib/reporters");
const { TableHints } = require("sequelize");

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

function ListNode(val,next) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
}

const addTwoNumbers = (l1, l2) => {
    // initialize a dummy head for the result list
    let dummyHead = new ListNode(0);
    let cur = dummyHead;
    let carry = 0;

    // convert arrays to linked lists
    l1 = arrayToListNode(l1);
    l2 = arrayToListNode(l2);

    // loop through lists
    while (l1 !== null || l2 !== null) {
        let x = (l1 !== null) ? l1.val : 0;
        let y = (l2 !== null) ? l2.val : 0;

        let sum = carry + x + y;

        carry = Math.floor(sum/10);

        cur.next = new ListNode(sum % 10);
        cur = cur.next;

        if (l1 !== null) l1 = l1.next;
        if (l2 !== null) l2 = l2.next;
    }

    if (carry > 0) {
        cur.next = new ListNode(carry);
    }

    return listNodeToArray(dummyHead.next);
};

const arrayToListNode = (arr) => {
    let dummyHead = new ListNode(0);
    let cur = dummyHead;
    arr.forEach(val => {
        cur.next = new ListNode(val);
        cur = cur.next;
    });
    return dummyHead.next;
}

const listNodeToArray = (node) => {
    let arr = [];
    while (node !== null) {
        arr.push(node.val);
        node = node.next;
    }
    return arr;
}

// test cases

// Example 1:
// Input: l1 = [2,4,3], l2 = [5,6,4]
// Output: [7,0,8]
// Explanation: 342 + 465 = 807.
const a1 = [2,4,3];
const a2 = [5,6,4];
console.log(addTwoNumbers(a1,a2)); // expect [7,0,8]

// Example 2:
// Input: l1 = [0], l2 = [0]
// Output: [0]
const b1 = [0];
const b2 = [0];
console.log(addTwoNumbers(b1,b2)); // expect [0]

// Example 3:
// Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
// Output: [8,9,9,9,0,0,0,1]
const c1 = [9,9,9,9,9,9,9];
const c2 = [9,9,9,9];
console.log(addTwoNumbers(c1,c2)); // expect [8,9,9,9,0,0,0,1]
