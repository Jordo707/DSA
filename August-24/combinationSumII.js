/*

Given a collection of candidate numbers (candidates) and a target number (target), find all unique combinations in candidates where the candidate numbers sum to target.

Each number in candidates may only be used once in the combination.

Note: The solution set must not contain duplicate combinations.

*/

const combinationSum2 = (candidates, target) => {
    // Initialize solutions array
    const solutions = [];

    const backtrack = (currentCombination, remainingSum, start) => {
        if (remainingSum === 0) {
            solutions.push([...currentCombination]);
            return;
        }

        if (remainingSum < 0) {
            return;
        }

        for (let i = start; i < candidates.length; i++) {
            if (i > start && candidates[i] === candidates[i - 1]) {
                continue;
            }

            currentCombination.push(candidates[i]);
            backtrack(currentCombination, remainingSum - candidates[i], i + 1);
            currentCombination.pop();
        }
    };

    // Sort candidates array in ascending order
    candidates.sort((a, b) => a - b);
    // Start backtracking with an empty currentCombination and start index 0
    backtrack([], target, 0);

    return solutions;
}

// Test Cases
console.log(combinationSum2([10,1,2,7,6,1,5],8)); /* [
                                    [1,1,6],
                                    [1,2,5],
                                    [1,7],
                                    [2,6]
                                    ]
                                    */



console.log(combinationSum2([2,5,2,1,2],5)); /* [
                                    [1,2,2],
                                    [5]
                                    ]
                                    */
