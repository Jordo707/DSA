/*

You are given an array of integers nums and the head of a linked list. Return the head of the modified linked list after removing all nodes from the linked list that have a value that exists in nums.

*/

class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

const modifiedList = (nums, head) => {
    const dummy = new ListNode(0);
    dummy.next = head;

    let curr = dummy;

    while (curr.next) {
        if (nums.includes(curr.next.val)) {
            curr.next = curr.next.next;
        } else {
            curr = curr.next;
        }
    }

    return dummy.next;
}



// Test Cases
console.log(modifiedList([1,2,3], [1,2,3,4,5])); // [4,5]
console.log(modifiedList([1], [1,2,1,2,1,2])); // [2,2,2]
console.log(modifiedList([5], [1,2,3,4])); // [1,2,3,4]
