// Given a string s, find the length of the longest substring without repeating characters.

const lengthOfLongestSubstring = (s) => {
    let curStack = [];
    let longestStack = [];

    for (let i = 0; i < s.length; i++) {
        const charIndex = curStack.indexOf(s[i]);
        if (charIndex !== -1) {
            // If current character is found in curStack, slice curStack from the next character of the first occurrence
            curStack = curStack.slice(charIndex + 1);
        }
        curStack.push(s[i]);

        // Update longestStack if curStack is longer
        if (curStack.length > longestStack.length) {
            longestStack = [...curStack];
        }
    }
    return longestStack.length;
};

// test cases
a = 'abcabcbb';
b = 'bbbb';
c = 'pwwkew';

console.log(lengthOfLongestSubstring(a)); // expect 3
console.log(lengthOfLongestSubstring(b)); // expect 1
console.log(lengthOfLongestSubstring(c)); // expect 3
