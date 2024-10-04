/*

You are given a positive integer array skill of even length n where skill[i] denotes the skill of the ith player. Divide the players into n / 2 teams of size 2 such that the total skill of each team is equal.

The chemistry of a team is equal to the product of the skills of the players on that team.

Return the sum of the chemistry of all the teams, or return -1 if there is no way to divide the players into teams such that the total skill of each team is equal.

*/

const dividePlayers = (skill) => {
    const n = skill.length;
    if (n % 2 !== 0) return -1; // Just a sanity check since the problem states that n is even.

    skill.sort((a, b) => a - b);

    const totalSum = skill.reduce((acc, val) => acc + val, 0);
    const targetSum = totalSum / (n / 2); // Target sum for each pair.

    let chemistrySum = 0;
    for (let i = 0; i < n / 2; i++) {
        const pairSum = skill[i] + skill[n - 1 - i];
        if (pairSum !== targetSum) return -1;

        chemistrySum += skill[i] * skill[n - 1 - i];
    }

    return chemistrySum;
}

// Test Cases
console.log(dividePlayers([3,2,5,1,3,4])); // 22
console.log(dividePlayers([3,4])); // 12
console.log(dividePlayers([1,1,2,3])); // -1
