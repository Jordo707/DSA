/*

There is a party where n friends numbered from 0 to n - 1 are attending. There is an infinite number of chairs in this party that are numbered from 0 to infinity. When a friend arrives at the party, they sit on the unoccupied chair with the smallest number.

For example, if chairs 0, 1, and 5 are occupied when a friend comes, they will sit on chair number 2.
When a friend leaves the party, their chair becomes unoccupied at the moment they leave. If another friend arrives at that same moment, they can sit in that chair.

You are given a 0-indexed 2D integer array times where times[i] = [arrivali, leavingi], indicating the arrival and leaving times of the ith friend respectively, and an integer targetFriend. All arrival times are distinct.

Return the chair number that the friend numbered targetFriend will sit on.

*/

class MinHeap {
    constructor() {
        this.heap = [];
    }
    size() {
        return this.heap.length;
    }
    peek() {
        return this.heap[0];
    }
    push(val) {
        this.heap.push(val);
        this._bubbleUp(this.heap.length - 1);
    }
    pop() {
        const min = this.heap[0];
        const end = this.heap.pop();
        if (this.heap.length > 0) {
            this.heap[0] = end;
            this._bubbleDown(0);
        }
        return min;
    }
    _bubbleUp(index) {
        const element = this.heap[index];
        while (index > 0) {
            const parentIndex = Math.floor((index - 1) / 2);
            const parent = this.heap[parentIndex];
            if (parent <= element) break;
            this.heap[parentIndex] = element;
            this.heap[index] = parent;
            index = parentIndex;
        }
    }
    _bubbleDown(index) {
        const length = this.heap.length;
        const element = this.heap[index];
        while (true) {
            let leftChildIdx = index * 2 + 1;
            let rightChildIdx = index * 2 + 2;
            let swapIndex = null;
            if (leftChildIdx < length) {
                let leftChild = this.heap[leftChildIdx];
                if (leftChild < element) {
                    swapIndex = leftChildIdx;
                }
            }
            if (rightChildIdx < length) {
                let rightChild = this.heap[rightChildIdx];
                if ((swapIndex === null && rightChild < element) || (swapIndex !== null && rightChild < this.heap[swapIndex])) {
                    swapIndex = rightChildIdx;
                }
            }
            if (swapIndex === null) break;
            this.heap[index] = this.heap[swapIndex];
            this.heap[swapIndex] = element;
            index = swapIndex;
        }
    }
}

const smallestChair = (times, targetFriend) => {
    const n = times.length;

    // Create events array: [time, eventType ('arrive' or 'leave'), friendIndex]
    const events = [];
    for (let i = 0; i < n; i++) {
        events.push([times[i][0], 'arrive', i]);
        events.push([times[i][1], 'leave', i]);
    }

    // Sort events by time, process 'leave' before 'arrive' at the same time
    events.sort((a, b) => {
        if (a[0] !== b[0]) return a[0] - b[0];
        if (a[1] === b[1]) return 0;
        // 'leave' before 'arrive' at same time
        return a[1] === 'leave' ? -1 : 1;
    });

    const availableChairs = new MinHeap();
    let nextAvailableChair = 0;
    const chairAssigned = new Array(n);

    for (const [time, eventType, friendIndex] of events) {
        if (eventType === 'leave') {
            const chairNumber = chairAssigned[friendIndex];
            availableChairs.push(chairNumber);
        } else { // 'arrive'
            let chairNumber;
            if (availableChairs.size() > 0) {
                chairNumber = availableChairs.pop();
            } else {
                chairNumber = nextAvailableChair;
                nextAvailableChair++;
            }
            chairAssigned[friendIndex] = chairNumber;

            if (friendIndex === targetFriend) {
                return chairNumber;
            }
        }
    }
};

// Test Cases
console.log(smallestChair([[1,4],[2,3],[4,6]], 1)); // Output: 1
console.log(smallestChair([[3,10],[1,5],[2,6]], 0)); // Output: 2

