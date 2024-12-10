/*

You are given a 0-indexed 2D integer array of events where events[i] = [startTimei, endTimei, valuei]. The ith event starts at startTimei and ends at endTimei, and if you attend this event, you will receive a value of valuei. You can choose at most two non-overlapping events to attend such that the sum of their values is maximized.

Return this maximum sum.

Note that the start time and end time is inclusive: that is, you cannot attend two events where one of them starts and the other ends at the same time. More specifically, if you attend an event with end time t, the next event must start at or after t + 1.

*/

const maxTwoEvents = (events) => {
    // Sort events by their end time
    events.sort((a, b) => a[1] - b[1]);

    let maxSum = 0; // Maximum value of two events
    let bestSingleValue = 0; // Best single event value seen so far

    // Helper function to find the last non-overlapping event using binary search
    const findLastNonOverlapping = (index) => {
        let left = 0, right = index - 1;
        while (left <= right) {
            const mid = Math.floor((left + right) / 2);
            if (events[mid][1] < events[index][0]) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        return right; // Index of the last non-overlapping event
    };

    for (let i = 0; i < events.length; i++) {
        const [start, end, value] = events[i];

        // Find the best non-overlapping event
        const lastNonOverlappingIndex = findLastNonOverlapping(i);
        let valueWithBestNonOverlapping = value;

        if (lastNonOverlappingIndex !== -1) {
            valueWithBestNonOverlapping += events[lastNonOverlappingIndex][2];
        }

        // Update the maximum value of two events
        maxSum = Math.max(maxSum, valueWithBestNonOverlapping);

        // Update the best single event value
        bestSingleValue = Math.max(bestSingleValue, value);

        // Ensure maxSum considers only one event in edge cases
        maxSum = Math.max(maxSum, bestSingleValue);
    }

    return maxSum;
};

// Test Cases
console.log(maxTwoEvents([[1,3,2],[4,5,2],[2,4,3]])); // 4
console.log(maxTwoEvents([[1,3,2],[4,5,2],[1,5,5]])); // 5
