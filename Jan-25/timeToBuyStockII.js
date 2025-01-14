/*

You are given an integer array prices where prices[i] is the price of a given stock on the ith day.

On each day, you may decide to buy and/or sell the stock. You can only hold at most one share of the stock at any time. However, you can buy it then immediately sell it on the same day.

Find and return the maximum profit you can achieve.

*/

const maxProfit = prices => {
    // Initialize a max profit variable to 0
    let maxProfit = 0;
    // Loop through the elements of the array, adding the difference between the current element and the previous element to the max profit if the difference is greater than 0
    for (let i = 1; i < prices.length; i++) {
        maxProfit += Math.max(prices[i] - prices[i - 1], 0);
    }
    return maxProfit;
}

// Test Cases
console.log(maxProfit([7,1,5,3,6,4])); // 7
console.log(maxProfit([1,2,3,4,5])); // 4
console.log(maxProfit([7,6,4,3,1])); // 0
