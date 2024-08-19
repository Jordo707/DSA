/*

There is only one character 'A' on the screen of a notepad. You can perform one of two operations on this notepad for each step:

    > Copy All: You can copy all the characters present on the screen (a partial copy is not allowed).

    > Paste: You can paste the characters which are copied last time.

Given an integer n, return the minimum number of operations to get the character 'A' exactly n times on the screen.

*/

const minSteps = n => {

    let steps = 0;
    for (let i = 2; i <= n; i++) {
        while (n % i === 0) {
            steps += i;
            n /= i;
        }
    }
    return steps;

}

// Test Case
console.log(minSteps(3)); // 3
console.log(minSteps(1)); // 0
console.log(minSteps(4)); // 4
console.log(minSteps(5)); // 5
