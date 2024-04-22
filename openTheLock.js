/*

You have a lock in front of you with 4 circular wheels. Each wheel has 10 slots: '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'. The wheels can rotate freely and wrap around: for example we can turn '9' to be '0', or '0' to be '9'. Each move consists of turning one wheel one slot.

The lock initially starts at '0000', a string representing the state of the 4 wheels.

You are given a list of deadends dead ends, meaning if the lock displays any of these codes, the wheels of the lock will stop turning and you will be unable to open it.

Given a target representing the value of the wheels that will unlock the lock, return the minimum total number of turns required to open the lock, or -1 if it is impossible.

*/

const openLock = (deadends, target) => {
    const dead = new Set(deadends); // Convert to a set for faster access
    const visited = new Set();
    const queue = [];
    const initial = '0000';

    if (dead.has(initial)) return -1; // Special case if initial is a deadend
    if (initial === target) return 0; // Special case if initial is already the target

    queue.push([initial, 0]); // Push initial state with 0 moves
    visited.add(initial);

    while (queue.length > 0) {
        const [state, turns] = queue.shift(); // Get the current state and number of turns taken to reach here

        for (let i = 0; i < 4; i++) { // For each of the 4 wheels
            const num = parseInt(state[i], 10);
            const up = (num + 1) % 10; // Increment the wheel, wrap around with mod 10
            const down = (num - 1 + 10) % 10; // Decrement the wheel, wrap around with mod 10

            const nextState1 = state.substring(0, i) + up + state.substring(i + 1); // Next state after turning wheel up
            const nextState2 = state.substring(0, i) + down + state.substring(i + 1); // Next state after turning wheel down

            // Check the next state1
            if (!visited.has(nextState1) && !dead.has(nextState1)) {
                if (nextState1 === target) return turns + 1; // If reached target, return turns taken
                queue.push([nextState1, turns + 1]);
                visited.add(nextState1);
            }

            // Check the next state2
            if (!visited.has(nextState2) && !dead.has(nextState2)) {
                if (nextState2 === target) return turns + 1;
                queue.push([nextState2, turns + 1]);
                visited.add(nextState2);
            }
        }
    }

    return -1; // If all possibilities are exhausted, return -1
}

// test cases
const de1 = ['0201','0101','0102','1212','2002'];
const t1 = '0202';
const de2 = ['8888'];
const t2 = '0009';
const de3 = ["8887","8889","8878","8898","8788","8988","7888","9888"];
const t3 = '8888';

console.log(openLock(de1,t1)) // expect 6
console.log(openLock(de2,t2)) // expect 1
console.log(openLock(de3,t3)) // expect -1
