/*

You are given a 0-indexed string s and a 0-indexed integer array spaces that describes the indices in the original string where spaces will be added. Each space should be inserted before the character at the given index.

For example, given s = "EnjoyYourCoffee" and spaces = [5, 9], we place spaces before 'Y' and 'C', which are at indices 5 and 9 respectively. Thus, we obtain "Enjoy Your Coffee".
Return the modified string after the spaces have been added.

*/

const addSpaces = (s, spaces) => {
  let result = '';
  let j = 0;
  for (let i = 0; i < s.length; i++) {
    if (spaces[j] === i) {
      result += ' ';
      j++;
    }
    result += s[i];
  }
  return result;
}

// Test Cases
console.log(addSpaces("EnjoyYourCoffee", [5, 9])); // "Enjoy Your Coffee"
console.log(addSpaces("icodeinjs", [1, 5, 7])); // "i code in js"
