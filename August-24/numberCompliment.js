/*

The complement of an integer is the integer you get when you flip all the 0's to 1's and all the 1's to 0's in its binary representation.

For example, The integer 5 is "101" in binary and its complement is "010" which is the integer 2.

Given an integer num, return its complement.

*/

const findComplement = num => {

    const bin = numToBinary(num);

    let newBin = ""

    for (let i = 0; i < bin.length; i++) {
        newBin += (bin[i] === '0') ? '1' : '0';
    }
    return binaryToNum(newBin);
}

const numToBinary = num => {
    return num.toString(2);
}

const binaryToNum = bin => {
    return parseInt(bin, 2);
}

// Test Cases
console.log(findComplement(5)); // 2
console.log(findComplement(3)); // 0
console.log(findComplement(1)); // 0
