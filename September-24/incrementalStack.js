/*

Design a stack that supports increment operations on its elements.

Implement the CustomStack class:

CustomStack(int maxSize) Initializes the object with maxSize which is the maximum number of elements in the stack.
void push(int x) Adds x to the top of the stack if the stack has not reached the maxSize.
int pop() Pops and returns the top of the stack or -1 if the stack is empty.
void inc(int k, int val) Increments the bottom k elements of the stack by val. If there are less than k elements in the stack, increment all the elements in the stack.

*/

class CustomStack {
    constructor(maxSize) {
      this.stack = [];  // Stack to store the elements
      this.maxSize = maxSize;  // Maximum size of the stack
      this.incrementList = new Array(maxSize).fill(0);  // Increment list for tracking the increments
    }

    // Push operation: Adds an element to the top of the stack if not at max capacity
    push(x) {
      if (this.stack.length < this.maxSize) {
        this.stack.push(x);
      }
    }

    // Pop operation: Removes and returns the top element, adjusting increments if needed
    pop() {
      const index = this.stack.length - 1;
      if (index < 0) return -1;  // If stack is empty, return -1

      // Apply the increment value for this position
      if (index > 0) {
        this.incrementList[index - 1] += this.incrementList[index];
      }

      // Get the top element of the stack plus the increment
      const result = this.stack.pop() + this.incrementList[index];

      // Reset the increment value for this position
      this.incrementList[index] = 0;

      return result;
    }

    // Increment operation: Increments the bottom k elements by val
    increment(k, val) {
      // Limit k to the current size of the stack
      const limit = Math.min(k, this.stack.length);
      if (limit > 0) {
        this.incrementList[limit - 1] += val;
      }
    }
}
