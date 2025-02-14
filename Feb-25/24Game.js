/*

The 24 game is played as follows. You are given a list of four integers, each between 1 and 9, in a fixed order. By placing the operators +, -, *, and / between the numbers, and grouping them with parentheses, determine whether it is possible to reach the value 24.

*/

const judgePoint24 = (nums) => {
    const target = 24;
    const EPSILON = 0.001;
    const ADD = (a, b) => a + b;
    const SUBTRACT = (a, b) => a - b;
    const MULTIPLY = (a, b) => a * b;
    const DIVIDE = (a, b) => a / b;

    const operations = [ADD, SUBTRACT, MULTIPLY, DIVIDE];

    const solve = (nums) => {
        if (nums.length === 0) {
            return false;
        }

        if (nums.length === 1) {
            return Math.abs(nums[0] - target) < EPSILON;
        }

        for (let i = 0; i < nums.length; i++) {
            for (let j = 0; j < nums.length; j++) {
                if (i !== j) {
                    const newNums = [];
                    for (let k = 0; k < nums.length; k++) {
                        if (k !== i && k !== j) {
                            newNums.push(nums[k]);
                        }
                    }

                    for (let k = 0; k < operations.length; k++) {
                        if ((k < 2 && i < j) || (k >= 2 && i > j)) {
                            continue;
                        }

                        if (k < 2 && j < i) {
                            continue;
                        }

                        if (k === 0 && solve([...newNums, operations[k](nums[i], nums[j])])) {
                            return true;
                        }

                        if (k === 1 && solve([...newNums, operations[k](nums[i], nums[j])])) {
                            return true;
                        }

                        if (k === 2 && solve([...newNums, operations[k](nums[i], nums[j])])) {
                            return true;
                        }

                        if (k === 3 && nums[j] !== 0 && solve([...newNums, operations[k](nums[i], nums[j])])) {
                            return true;
                        }
                    }
                }
            }
        }

        return false;
    }

    return solve(nums);
}

// Test cases
console.log(judgePoint24([5,2,7,8])); // true
console.log(judgePoint24([1,2,1,2])); // false
console.log(judgePoint24([4,1,8,7])); // true
