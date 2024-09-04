/*

A robot on an infinite XY-plane starts at point (0, 0) facing north. The robot can receive a sequence of these three possible types of commands:

-2: Turn left 90 degrees.
-1: Turn right 90 degrees.
1 <= k <= 9: Move forward k units, one unit at a time.
Some of the grid squares are obstacles. The ith obstacle is at grid point obstacles[i] = (xi, yi). If the robot runs into an obstacle, then it will instead stay in its current location and move on to the next command.

Return the maximum Euclidean distance that the robot ever gets from the origin squared (i.e. if the distance is 5, return 25).

Note:

North means +Y direction.
East means +X direction.
South means -Y direction.
West means -X direction.
There can be obstacle in [0,0].

*/

const robotSim = (commands, obstacles) => {
    // Direction vectors: north, east, south, west
    const directions = [[0, 1], [1, 0], [0, -1], [-1, 0]];
    let directionIndex = 0; // Start facing north
    let x = 0, y = 0;
    let maxDistanceSquared = 0;

    // Convert obstacles into a set of strings for fast lookup
    const obstacleSet = new Set(obstacles.map(([ox, oy]) => `${ox},${oy}`));

    for (const command of commands) {
        if (command === -1) {
            // Turn right
            directionIndex = (directionIndex + 1) % 4;
        } else if (command === -2) {
            // Turn left
            directionIndex = (directionIndex + 3) % 4;
        } else {
            // Move forward k steps
            const [dx, dy] = directions[directionIndex];
            for (let step = 0; step < command; step++) {
                const nextX = x + dx;
                const nextY = y + dy;
                // Check if the next position is an obstacle
                if (!obstacleSet.has(`${nextX},${nextY}`)) {
                    x = nextX;
                    y = nextY;
                    maxDistanceSquared = Math.max(maxDistanceSquared, x ** 2 + y ** 2);
                } else {
                    break; // Stop moving if there's an obstacle
                }
            }
        }
    }

    return maxDistanceSquared;
};

// Test Cases
console.log(robotSim([4,-1,3], [])); // 25
console.log(robotSim([4,-1,4,-2,4], [[2,4]])); // 65
console.log(robotSim([6,-1,-1,6], [])); // 36
