/*

You are given an array arr of positive integers. You are also given the array queries where queries[i] = [lefti, righti].

For each query i compute the XOR of elements from lefti to righti (that is, arr[lefti] XOR arr[lefti + 1] XOR ... XOR arr[righti] ).

Return an array answer where answer[i] is the answer to the ith query.

*/

const xorQueries = (arr, queries) => {
    let res = [];

    for (let [left, right] of queries) {
        let xorRes = 0;
        for (let i = left; i <= right; i++) {
            xorRes ^= arr[i];
        }
        res.push(xorRes);
    }

    return res;

}

// Test Cases
console.log(xorQueries([1,3,4,8], [[0,1],[1,2],[0,3],[3,3]])); // [2,7,14,8]
console.log(xorQueries([4,8,2,10], [[2,3],[1,3],[0,0],[0,3]])); //[8,0,4,4]
