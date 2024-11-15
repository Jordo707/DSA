/*

There is a bookstore owner that has a store open for n minutes. You are given an integer array customers of length n where customers[i] is the number of the customers that enter the store at the start of the ith minute and all those customers leave after the end of that minute.

During certain minutes, the bookstore owner is grumpy. You are given a binary array grumpy where grumpy[i] is 1 if the bookstore owner is grumpy during the ith minute, and is 0 otherwise.

When the bookstore owner is grumpy, the customers entering during that minute are not satisfied. Otherwise, they are satisfied.

The bookstore owner knows a secret technique to remain not grumpy for minutes consecutive minutes, but this technique can only be used once.

Return the maximum number of customers that can be satisfied throughout the day.

*/

const maxSatisfied = (customers, grumpy, minutes) => {
    let satisfied = 0;
    let maxSatisfied = 0;
    let windowSatisfied = 0;
    let left = 0;
    let right = 0;

    while (right < customers.length) {
        if (grumpy[right] === 0) {
            satisfied += customers[right];
        } else {
            windowSatisfied += customers[right];
        }

        if (right - left + 1 > minutes) {
            if (grumpy[left] === 1) {
                windowSatisfied -= customers[left];
            }
            left++;
        }

        maxSatisfied = Math.max(maxSatisfied, windowSatisfied);
        right++;
    }

    return satisfied + maxSatisfied;
}

// Test Cases
console.log(maxSatisfied([1, 0, 1, 2, 1, 1, 7, 5], [0, 1, 0, 1, 0, 1, 0, 1], 3)); // 16
console.log(maxSatisfied([1], [0], 1)); // 1
