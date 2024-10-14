/*

You are given a 0-indexed integer array nums and an integer k. You have a starting score of 0.

In one operation:

choose an index i such that 0 <= i < nums.length,
increase your score by nums[i], and
replace nums[i] with ceil(nums[i] / 3).
Return the maximum possible score you can attain after applying exactly k operations.

The ceiling function ceil(val) is the least integer greater than or equal to val.

*/

class MaxHeap {
    constructor() {
        this.heap = [];
    }

    // Helper methods for heap operations
    parent(i) { return Math.floor((i - 1) / 2); }
    leftChild(i) { return 2 * i + 1; }
    rightChild(i) { return 2 * i + 2; }

    // Insert a new element into the heap
    push(val) {
        this.heap.push(val);
        this.heapifyUp(this.heap.length - 1);
    }

    // Pop the max element (root) from the heap
    pop() {
        const maxVal = this.heap[0];
        const endVal = this.heap.pop();
        if (this.heap.length > 0) {
            this.heap[0] = endVal;
            this.heapifyDown(0);
        }
        return maxVal;
    }

    // Heapify up (used when inserting new element)
    heapifyUp(index) {
        let currentIndex = index;
        let parentIndex = this.parent(currentIndex);
        while (currentIndex > 0 && this.heap[currentIndex] > this.heap[parentIndex]) {
            [this.heap[currentIndex], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[currentIndex]];
            currentIndex = parentIndex;
            parentIndex = this.parent(currentIndex);
        }
    }

    // Heapify down (used when popping the max element)
    heapifyDown(index) {
        let largest = index;
        const left = this.leftChild(index);
        const right = this.rightChild(index);

        if (left < this.heap.length && this.heap[left] > this.heap[largest]) {
            largest = left;
        }
        if (right < this.heap.length && this.heap[right] > this.heap[largest]) {
            largest = right;
        }
        if (largest !== index) {
            [this.heap[index], this.heap[largest]] = [this.heap[largest], this.heap[index]];
            this.heapifyDown(largest);
        }
    }
}

const maxKelements = (nums, k) => {
    // Convert nums into a max-heap
    const maxHeap = new MaxHeap();
    nums.forEach(num => maxHeap.push(num));

    let score = 0;

    for (let i = 0; i < k; i++) {
        // Pop the largest element
        let maxVal = maxHeap.pop();

        // Add the largest element to the score
        score += maxVal;

        // Compute the next value using ceil(maxVal / 3)
        let nextVal = Math.ceil(maxVal / 3);

        // Push the new value back into the heap
        maxHeap.push(nextVal);
    }

    return score;
}

// Test Cases
console.log(maxKelements([10, 10, 10, 10, 10], 5)); // Expected output: 50
console.log(maxKelements([1, 10, 3, 3, 3], 3)); // Expected output: 17

