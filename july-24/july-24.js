/*

You are given a 0-indexed integer array mapping which represents the mapping rule of a shuffled decimal system. mapping[i] = j means digit i should be mapped to digit j in this system.

The mapped value of an integer is the new integer obtained by replacing each occurrence of digit i in the integer with mapping[i] for all 0 <= i <= 9.

You are also given another integer array nums. Return the array nums sorted in non-decreasing order based on the mapped values of its elements.

*/

const sortJumbled = (mapping, nums) => {
    // Function to map a single number
    const mapNumber = (num) => {
        let strNum = String(num);
        let mappedStr = '';
        for (let char of strNum) {
            mappedStr += mapping[parseInt(char)];
        }
        return parseInt(mappedStr, 10);
    };

    // Create array of objects with original and mapped values
    let mappedNums = nums.map(num => {
        return { original: num, mapped: mapNumber(num) };
    });

    // Sort array based on the mapped values
    mappedNums.sort((a, b) => a.mapped - b.mapped);

    // Extract the original numbers in the sorted order
    return mappedNums.map(item => item.original);

}

// Test Cases
const mapping1 = [8,9,4,0,2,1,3,5,7,6];
const nums1 = [991,338,38];
console.log(sortJumbled(mapping1,nums1)) // Expect [338,38,991]

const mapping2 = [0,1,2,3,4,5,6,7,8,9];
const nums2 = [789,456,123]
console.log(sortJumbled(mapping2, nums2)) // Expect [123,456,789]
