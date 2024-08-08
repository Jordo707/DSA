/*

Given a string s, partition the string into one or more substrings such that the characters in each substring are unique. That is, no letter appears in a single substring more than once.

Return the minimum number of substrings in such a partition.

Note that each character should belong to exactly one substring in a partition.

*/

const partitionString = (s) => {
    // Create partition array
    let partitions = [];

    // Iterate through s, slicing off substrings from the begining until a non-unique element is encountered before inserting the resulting substring into the partitions array
    let uniqueSubstring = '';
    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        if (uniqueSubstring.includes(char)) {
            partitions.push(uniqueSubstring);
            uniqueSubstring = '';
        }
        uniqueSubstring += char;
    }
    partitions.push(uniqueSubstring);
    
    // Return the length of the partitions array
    return partitions.length
}

// Test Cases
console.log(partitionString("abacaba")) // Expect 4
console.log(partitionString("ssssss")) // Expect 6
