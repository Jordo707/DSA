/*

There are n children standing in a line. Each child is assigned a rating value given in the integer array ratings.

You are giving candies to these children subjected to the following requirements:

Each child must have at least one candy.
Children with a higher rating get more candies than their neighbors.
Return the minimum number of candies you need to have to distribute the candies to the children.

*/

const candy = ratings => {
    // Set a variable to the length of the array
    let n = ratings.length;
    // Set a variable to an array of length n filled with 1
    let candies = new Array(n).fill(1);
    // Loop through the array, starting from the second index
    for (let i = 1; i < n; i++) {
        // If the current element is greater than the previous element, increment the current element of the candies array
        if (ratings[i] > ratings[i - 1]) {
            candies[i] = candies[i - 1] + 1;
        }
    }
    // Loop through the array, starting from the second to last index
    for (let i = n - 2; i >= 0; i--) {
        // If the current element is greater than the next element and the current element of the candies array is less than or equal to the next element of the candies array, increment the current element of the candies array
        if (ratings[i] > ratings[i + 1] && candies[i] <= candies[i + 1]) {
            candies[i] = candies[i + 1] + 1;
        }
    }
    // Return the sum of the candies array
    return candies.reduce((a, b) => a + b);
}

// Test Cases
console.log(candy([1,0,2])); // 5
console.log(candy([1,2,2])); // 4
