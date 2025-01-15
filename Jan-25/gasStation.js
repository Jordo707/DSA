/*

There are n gas stations along a circular route, where the amount of gas at the ith station is gas[i].

You have a car with an unlimited gas tank and it costs cost[i] of gas to travel from the ith station to its next (i + 1)th station. You begin the journey with an empty tank at one of the gas stations.

Given two integer arrays gas and cost, return the starting gas station's index if you can travel around the circuit once in the clockwise direction, otherwise return -1. If there exists a solution, it is guaranteed to be unique.

*/

const canCompleteCircuit = (gas, cost) => {
    // Set a variable to the length of the array
    let n = gas.length;
    // Set a variable to 0
    let total = 0;
    // Set a variable to 0
    let tank = 0;
    // Set a variable to 0
    let start = 0;
    // Loop through the array
    for (let i = 0; i < n; i++) {
        // Update the total variable to the sum of the current element of the gas array and the current element of the cost array
        total += gas[i] - cost[i];
        // Update the tank variable to the sum of the current element of the gas array and the current element of the cost array
        tank += gas[i] - cost[i];
        // If the tank variable is less than 0, update the tank variable to 0 and update the start variable to the next index
        if (tank < 0) {
            tank = 0;
            start = i + 1;
        }
    }
    // Return the start variable if the total variable is greater than or equal to 0, otherwise return -1
    return total >= 0 ? start : -1;
}

// Test Cases
console.log(canCompleteCircuit([1,2,3,4,5], [3,4,5,1,2])); // 3
console.log(canCompleteCircuit([2,3,4], [3,4,3])); // -1
