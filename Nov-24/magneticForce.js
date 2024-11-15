/*

In the universe Earth C-137, Rick discovered a special form of magnetic force between two balls if they are put in his new invented basket. Rick has n empty baskets, the ith basket is at position[i], Morty has m balls and needs to distribute the balls into the baskets such that the minimum magnetic force between any two balls is maximum.

Rick stated that magnetic force between two different balls at positions x and y is |x - y|.

Given the integer array position and the integer m. Return the required force.

*/

const magneticForce = (position, m) => {
    position.sort((a, b) => a - b);

    let left = 1;
    let right = position[position.length - 1] - position[0];
    let result = 0;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        let balls = 1;
        let prev = position[0];

        for (let i = 1; i < position.length; i++) {
            if (position[i] - prev >= mid) {
                balls++;
                prev = position[i];
            }
        }

        if (balls >= m) {
            result = mid; // Record the current mid as a possible result
            left = mid + 1; // Try to find a larger minimum force
        } else {
            right = mid - 1; // Reduce the range to find a valid smaller force
        }
    }

    return result;
};

// Test Cases
console.log(magneticForce([1, 2, 3, 4, 7], 3)); // 3
console.log(magneticForce([5, 4, 3, 2, 1, 1000000000], 2)); // 999999999

