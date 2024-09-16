/*

Given a list of 24-hour clock time points in "HH:MM" format, return the minimum minutes difference between any two time-points in the list.

*/

const findMinDifference = timePoints => {
    const minutesInDay = 24 * 60; // Total minutes in a day

    // Helper function to convert "HH:MM" to minutes past midnight
    const timeToMinutes = time => {
        const [hours, minutes] = time.split(':').map(Number);
        return hours * 60 + minutes;
    };

    // Convert all time points to minutes
    let minutesList = timePoints.map(timeToMinutes);

    // Sort the list of times in ascending order
    minutesList.sort((a, b) => a - b);

    // Initialize the minimum difference as the largest possible (circular comparison)
    let minDiff = minutesInDay + 1; // Max diff + 1 to ensure we find a smaller one

    // Compare consecutive time points
    for (let i = 1; i < minutesList.length; i++) {
        minDiff = Math.min(minDiff, minutesList[i] - minutesList[i - 1]);
    }

    // Compare the last and first time points (since time is circular)
    minDiff = Math.min(minDiff, minutesInDay - (minutesList[minutesList.length - 1] - minutesList[0]));

    return minDiff;
}

// Test Cases
console.log(findMinDifference(["23:59","00:00"])); // 1
console.log(findMinDifference(["00:00","23:59","00:00"])); // 0
