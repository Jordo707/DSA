/*

You are given an integer array bloomDay, an integer m and an integer k.

You want to make m bouquets. To make a bouquet, you need to use k adjacent flowers from the garden.

The garden consists of n flowers, the ith flower will bloom in the bloomDay[i] and then can be used in exactly one bouquet.

Return the minimum number of days you need to wait to be able to make m bouquets from the garden. If it is impossible to make m bouquets return -1.

*/

const minDays = (bloomDay, m, k) => {
    if (m * k > bloomDay.length) return -1;

    let left = 1;
    let right = Math.max(...bloomDay);

    while (left < right) {
        const mid = Math.floor((left + right) / 2);
        let bouquets = 0;
        let flowers = 0;

        for (let i = 0; i < bloomDay.length; i++) {
            if (bloomDay[i] <= mid) {
                flowers++;
                if (flowers === k) {
                    bouquets++;
                    flowers = 0;
                }
            } else {
                flowers = 0;
            }
        }

        if (bouquets < m) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }

    return left;
}

// Test Cases
console.log(minDays([1, 10, 3, 10, 2], 3, 1)); // 3
console.log(minDays([1, 10, 3, 10, 2], 3, 2)); // -1
console.log(minDays([7, 7, 7, 7, 12, 7, 7], 2, 3)); // 12
