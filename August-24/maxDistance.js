/*

You are given m arrays, where each array is sorted in ascending order.

You can pick up two integers from two different arrays (each array picks one) and calculate the distance. We define the distance between two integers a and b to be their absolute difference |a - b|.

Return the maximum distance.

*/

const maxDistance = (arrays) => {
    // Initialize global min and max with first array's values
    let globalMin = arrays[0][0];
    let globalMax = arrays[0][arrays[0].length - 1];

    let maxDistance = 0;

    // Iterate overremaining arrays
    for (let i = 1; i < arrays.length; i++) {
        const currentArray = arrays[i];
        const currentMin = currentArray[0];
        const currentMax = currentArray[currentArray.length - 1];

        // Calculate possible distances
        maxDistance = Math.max(maxDistance, Math.abs(currentMax - globalMin), Math.abs(globalMax - currentMin));

        // Update global min and max
        globalMin = Math.min(globalMin, currentMin);
        globalMax = Math.max(globalMax, currentMax);
    }

    return maxDistance;
}

// Test Cases
console.log(maxDistance([[1,2,3],[4,5],[1,2,3]])); // 4
console.log(maxDistance([[1],[1]])); // 0
