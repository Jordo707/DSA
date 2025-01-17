/*

Given an array of strings words and a width maxWidth, format the text such that each line has exactly maxWidth characters and is fully (left and right) justified.

You should pack your words in a greedy approach; that is, pack as many words as you can in each line. Pad extra spaces ' ' when necessary so that each line has exactly maxWidth characters.

Extra spaces between words should be distributed as evenly as possible. If the number of spaces on a line does not divide evenly between words, the empty slots on the left will be assigned more spaces than the slots on the right.

For the last line of text, it should be left-justified, and no extra space is inserted between words.

Note:

A word is defined as a character sequence consisting of non-space characters only.
Each word's length is guaranteed to be greater than 0 and not exceed maxWidth.
The input array words contains at least one word.

*/

const fullJustify = (words, maxWidth) => {
    // Set a variable to the length of the array
    let n = words.length;
    // Set a variable to an empty array
    let lines = [];
    // Set a variable to an empty array
    let line = [];
    // Set a variable to 0
    let length = 0;
    // Loop through the array
    for (let i = 0; i < n; i++) {
        // If the length of the current word plus the length variable plus the length of the line array is less than or equal to the maxWidth, push the current word to the line array, increment the length variable by the length of the current word, and continue to the next iteration
        if (length + words[i].length + line.length <= maxWidth) {
            line.push(words[i]);
            length += words[i].length;
            continue;
        }
        // Push the line array to the lines array
        lines.push(line);
        // Set the line array to an empty array
        line = [];
        // Set the length variable to 0
        length = 0;
        // Push the current word to the line array
        line.push(words[i]);
        // Increment the length variable by the length of the current word
        length += words[i].length;
    }
    // Push the line array to the lines array
    lines.push(line);
    // Set a variable to an empty array
    let result = [];
    // Loop through the lines array
    for (let i = 0; i < lines.length; i++) {
        // Set a variable to the length of the current line
        let lineLength = lines[i].join("").length;
        // Set a variable to the number of spaces that need to be added to the current line
        let spaces = maxWidth - lineLength;
        // Set a variable to an empty string
        let lineString = "";
        // If the current line is the last line, set the lineString variable to the current line joined by a space
        if (i === lines.length - 1) {
            lineString = lines[i].join(" ");
        } else {
            // Set a variable to the number of spaces that need to be added between each word
            let space = Math.floor(spaces / (lines[i].length - 1));
            // Set a variable to the number of spaces that need to be added to the left of the current line
            let left = spaces % (lines[i].length - 1);
            // Loop through the current line
            for (let j = 0; j < lines[i].length; j++) {
                // If the current index is not the last index, update the lineString variable to the current word plus the space variable
                if (j !== lines[i].length - 1) {
                    lineString += lines[i][j] + " ".repeat(space);
                    // If the left variable is greater than 0, update the lineString variable to the current word plus an additional space
                    if (left > 0) {
                        lineString += " ";
                        left--;
                    }
                } else {
                    // If the current index is the last index, update the lineString variable to the current word
                    lineString += lines[i][j];
                }
            }
        }
    }
    // Return the result array
    return result;
}

// Test Cases
console.log(fullJustify(["This", "is", "an", "example", "of", "text", "justification."], 16)); // ["This    is    an", "example  of text", "justification.  "]
console.log(fullJustify(["What","must","be","acknowledgment","shall","be"], 16)); // ["What   must   be", "acknowledgment  ", "shall be        "]
console.log(fullJustify(["Science","is","what","we","understand","well","enough","to","explain","to","a","computer.","Art","is","everything","else","we","do"], 20)); // ["Science  is  what we", "understand      well", "enough to explain to", "a  computer.  Art is", "everything  else  we", "do                  "]
