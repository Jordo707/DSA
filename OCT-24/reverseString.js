/*

Write a function that reverses a string. The input string is given as an array of characters s.

You must do this by modifying the input array in-place with O(1) extra memory.

*/

const reverseString = s => {
    let left = 0;
    let right = s.length - 1;

    while (left < right) {
        // Swap characters at left and right
        [s[left], s[right]] = [s[right], s[left]];
        left++;
        right--;
    }

    return s;
}

// Test Cases
console.log(reverseString(["h","e","l","l","o"])); // ["o","l","l","e","h"]
console.log(reverseString(["H","a","n","n","a","h"])); // ["h","a","n","n","a","H"]
