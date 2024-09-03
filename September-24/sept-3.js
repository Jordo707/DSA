/*

You are given a string s consisting of lowercase English letters, and an integer k.

First, convert s into an integer by replacing each letter with its position in the alphabet (i.e., replace 'a' with 1, 'b' with 2, ..., 'z' with 26). Then, transform the integer by replacing it with the sum of its digits. Repeat the transform operation k times in total.

For example, if s = "zbax" and k = 2, then the resulting integer would be 8 by the following operations:

Convert: "zbax" ➝ "(26)(2)(1)(24)" ➝ "262124" ➝ 262124
Transform #1: 262124 ➝ 2 + 6 + 2 + 1 + 2 + 4 ➝ 17
Transform #2: 17 ➝ 1 + 7 ➝ 8
Return the resulting integer after performing the operations described above.

*/
const alphabetMap = {
    a: "1",
    b: "2",
    c: "3",
    d: "4",
    e: "5",
    f: "6",
    g: "7",
    h: "8",
    i: "9",
    j: "10",
    k: "11",
    l: "12",
    m: "13",
    n: "14",
    o: "15",
    p: "16",
    q: "17",
    r: "18",
    s: "19",
    t: "20",
    u: "21",
    v: "22",
    w: "23",
    x: "24",
    y: "25",
    z: "26"
}

const getLucky = (s, k) => {
    let numericString = "";
    for (let char of s) {
        numericString += alphabetMap[char];
    }

    const sumDigits = (numStr) => {
        return numStr.split('').reduce((sum, char) => sum + parseInt(char), 0);
    };

    let result = numericString;
    for (let i = 0; i < k; i++) {
        result = sumDigits(result).toString();
    }

    return parseInt(result);
}

// Test Cases
console.log(getLucky("iiii", 1)); // 36
console.log(getLucky("leetcode", 2)); // 6
