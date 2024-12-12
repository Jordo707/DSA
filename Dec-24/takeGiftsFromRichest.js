/*

You are given an integer array gifts denoting the number of gifts in various piles. Every second, you do the following:

Choose the pile with the maximum number of gifts.
If there is more than one pile with the maximum number of gifts, choose any.
Leave behind the floor of the square root of the number of gifts in the pile. Take the rest of the gifts.
Return the number of gifts remaining after k seconds.

*/

const pickGifts = (gifts, k) => {
    // Max-Heap simulation using negatives
    const maxHeap = gifts.map(gift => -gift);
    maxHeap.sort((a, b) => a - b); // Sort to make it a max-heap (in negative terms)

    while (k > 0) {
        const max = -maxHeap.shift(); // Get the max pile (convert back to positive)
        const remaining = Math.floor(Math.sqrt(max)); // Take the floor of the square root
        maxHeap.push(-remaining); // Push the remaining gifts back as negative
        maxHeap.sort((a, b) => a - b); // Maintain heap order
        k--;
    }

    // Sum up the remaining gifts
    return maxHeap.reduce((sum, val) => sum - val, 0); // Convert negatives back to positives
};

// Test cases
console.log(pickGifts([25,64,9,4,100], 4)); // 29
console.log(pickGifts([1,1,1,1], 4)); // 4
