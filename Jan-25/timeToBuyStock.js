/*

You are given an array prices where prices[i] is the price of a given stock on the ith day.

You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

*/

const maxProfit = prices => {
    // Initialize a max profit variable to 0 and a min price variable to the first element of the array
    let maxProfit = 0;
    let minPrice = prices[0];
    // Loop through the elements of the array, setting the min price to the minimum of the current element and the min price
    for (let i = 1; i < prices.length; i++) {
        minPrice = Math.min(minPrice, prices[i]);
        // Set the max profit to the maximum of the current max profit and the difference between the current element and the min price
        maxProfit = Math.max(maxProfit, prices[i] - minPrice);
    }
    return maxProfit;
}

// Test Cases
console.log(maxProfit([7,1,5,3,6,4])); // 5
console.log(maxProfit([7,6,4,3,1])); // 0
