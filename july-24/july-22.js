/*

You are given an array of strings names, and an array heights that consists of distinct positive integers. Both arrays are of length n.

For each index i, names[i] and heights[i] denote the name and height of the ith person.

Return names sorted in descending order by the people's heights.

*/

const sortPeople = (names, heights) => {
    // set n as length
    let n = names.length;
    let sorted = [];

    // create mapping object
    let mapping = {};

    // iterate through names and heights to match the two
    for (let i = 0; i < n; i++) {
        mapping[heights[i]] = names[i];
    }

    console.log(mapping)

    // sort height in descending order
    heights.sort((a,b) => b - a)

    // reorder names array to match height order
    for(let i = 0; i < n; i++) {
        sorted.push(mapping[heights[i]]);
    }

    return sorted;
}


// Test Cases
const names1 = ["Mary","John","Emma"]
const heights1 = [180,165,170]
console.log(sortPeople(names1, heights1)) // Expect ["Mary", "Emma", "John"]

const names2 = ["Alice","Bob","Bob"]
const heights2 = [155,185,150]
console.log(sortPeople(names2, heights2)) // Expect ["Bob", "Alice", "Bob"]
