/*

Given two non-negative integers num1 and num2 represented as strings, return the product of num1 and num2, also represented as a string.

Note: You must not use any built-in BigInteger library or convert the inputs to integer directly.

*/

const multiplyStrings = (s1, s2) => {
    const len1 = s1.length, len2 = s2.length;
    const result = new Array(len1 + len2).fill(0);

    for (let i = len1 - 1; i >= 0; i--) {
        for (let j = len2 - 1; j >= 0; j--) {
            const num1 = s1.charCodeAt(i) - '0'.charCodeAt(0);
            const num2 = s2.charCodeAt(j) - '0'.charCodeAt(0);
            const mul = num1 * num2;
            const sum = mul + result[i + j + 1];

            result[i + j + 1] = sum % 10;
            result[i + j] += Math.floor(sum / 10);
        }
    }

    while (result[0] === 0) {
        result.shift();
    }

    return result.length ? result.join('') : '0';
}

// Test Cases
console.log(multiplyStrings('2','3')) // '6'
console.log(multiplyStrings('123','456')) // '56088'
