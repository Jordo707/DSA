/*

You are given an integer array prices where prices[i] is the price of the ith item in a shop.

There is a special discount for items in the shop. If you buy the ith item, then you will receive a discount equivalent to prices[j] where j is the minimum index such that j > i and prices[j] <= prices[i]. Otherwise, you will not receive any discount at all.

Return an integer array answer where answer[i] is the final price you will pay for the ith item of the shop, considering the special discount.

*/

const finalPrice = (prices) => {
    const stack = [];
    for (let i = 0; i < prices.length; i++) {
        while (stack.length && prices[i] <= prices[stack[stack.length - 1]]) {
            prices[stack.pop()] -= prices[i];
        }
        stack.push(i);
    }
    return prices;
}

// Test Cases
console.log(finalPrice([8, 4, 6, 2, 3])); // [4, 2, 4, 2, 3]
console.log(finalPrice([1, 2, 3, 4, 5])); // [1, 2, 3, 4, 5]
console.log(finalPrice([10, 1, 1, 6])); // [9, 0, 1, 6]
