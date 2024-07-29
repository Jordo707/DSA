/*

There are n soldiers standing in a line. Each soldier is assigned a unique rating value.

You have to form a team of 3 soldiers amongst them under the following rules:

Choose 3 soldiers with index (i, j, k) with rating (rating[i], rating[j], rating[k]).
A team is valid if: (rating[i] < rating[j] < rating[k]) or (rating[i] > rating[j] > rating[k]) where (0 <= i < j < k < n).
Return the number of teams you can form given the conditions. (soldiers can be part of multiple teams).

*/

const numTeams = (rating) => {
    const n = rating.length;
    if (n < 3) return 0;

    let count = 0;

    // Arrays to store count of elements less/greater than current element to the left and right
    const leftLess = Array(n).fill(0);
    const leftGreater = Array(n).fill(0);
    const rightLess = Array(n).fill(0);
    const rightGreater = Array(n).fill(0);

    // Fill leftLess and leftGreater arrays
    for (let j = 1; j < n; j++) {
        for (let i = 0; i < j; i++) {
            if (rating[i] < rating[j]) {
                leftLess[j]++;
            } else if (rating[i] > rating[j]) {
                leftGreater[j]++;
            }
        }
    }

    // Fill rightLess and rightGreater arrays
    for (let j = n - 2; j >= 0; j--) {
        for (let k = n - 1; k > j; k--) {
            if (rating[k] < rating[j]) {
                rightLess[j]++;
            } else if (rating[k] > rating[j]) {
                rightGreater[j]++;
            }
        }
    }

    // Calculate the number of valid teams
    for (let j = 1; j < n - 1; j++) {
        count += leftLess[j] * rightGreater[j] + leftGreater[j] * rightLess[j];
    }

    return count;
}

// Test Cases
const rating1 = [2,5,3,4,1];
const rating2 = [2,1,3];
const rating3 = [1,2,3,4];

console.log(numTeams(rating1)) // Expect 3
console.log(numTeams(rating2)) // Expect 0
console.log(numTeams(rating3)) // Expect 4
