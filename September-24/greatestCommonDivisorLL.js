/*

Given the head of a linked list head, in which each node contains an integer value.

Between every pair of adjacent nodes, insert a new node with a value equal to the greatest common divisor of them.

Return the linked list after insertion.

The greatest common divisor of two numbers is the largest positive integer that evenly divides both numbers.

*/

class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next
    }
}

const gcd = (a, b) => {
    while (b !== 0) {
        [a,b] = [b,a % b];
    }
    return a;
}

const insertGCDNodes = head => {
    let current = head;

    while (current && current.next) {
        const gcdValue = gcd(current.val, current.next.val);
        const newNode = new ListNode(gcdValue);
        newNode.next = current.next;
        current.next = newNode;
        current = newNode.next;
    }
    return head;
}

const printLinkedList = (head) => {
    let current = head;
    const result = [];
    while (current) {
        result.push(current.val);
        current = current.next;
    }
    console.log(result);
};

// Test Cases
const head1 = new ListNode(18, new ListNode(6, new ListNode(10, new ListNode(3))));
printLinkedList(insertGCDNodes(head1)); // [18, 6, 6, 2, 10, 1, 3]

const head2 = new ListNode(7);
printLinkedList(insertGCDNodes(head2)); // [7]
