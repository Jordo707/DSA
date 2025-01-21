/*

Given an array of strings strs, group the anagrams together. You can return the answer in any order.

*/

const groupAnagrams = (strs) => {
    // Create an object to store the groups of anagrams
    let groups = {};
    // Loop through the array of strings
    for (let str of strs) {
        // Sort the string
        let sorted = str.split('').sort().join('');
        // If the sorted string is not in the object, add it
        if (!groups[sorted]) {
            groups[sorted] = [str];
        } else {
            // Otherwise, push the string into the array
            groups[sorted].push(str);
        }
    }
    // Return the values of the object
    return Object.values(groups);
}

// Test Cases
console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"])); // [["bat"],["nat","tan"],["ate","eat","tea"]]
console.log(groupAnagrams([""])); // [[""]]
console.log(groupAnagrams(["a"])); // [["a"]]
