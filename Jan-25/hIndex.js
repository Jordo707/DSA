/*

Given an array of integers citations where citations[i] is the number of citations a researcher received for their ith paper, return the researcher's h-index.

According to the definition of h-index on Wikipedia: The h-index is defined as the maximum value of h such that the given researcher has published at least h papers that have each been cited at least h times.

*/

const hIndex = citations => {
    // Set a variable to the length of the array
    let n = citations.length;
    // Set a variable to 0
    let h = 0;
    // Sort the array in descending order
    citations.sort((a, b) => b - a);
    // Loop through the array
    for (let i = 0; i < n; i++) {
        // If the current element is greater than or equal to the current index plus 1, increment the h variable
        if (citations[i] >= i + 1) {
            h++;
        }
    }
    // Return the h variable
    return h;
}

// Test Cases
console.log(hIndex([3,0,6,1,5])); // 3
console.log(hIndex([1,3,1])); // 1
