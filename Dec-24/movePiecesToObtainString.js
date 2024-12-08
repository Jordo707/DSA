/*

You are given two strings start and target, both of length n. Each string consists only of the characters 'L', 'R', and '_' where:

The characters 'L' and 'R' represent pieces, where a piece 'L' can move to the left only if there is a blank space directly to its left, and a piece 'R' can move to the right only if there is a blank space directly to its right.
The character '_' represents a blank space that can be occupied by any of the 'L' or 'R' pieces.
Return true if it is possible to obtain the string target by moving the pieces of the string start any number of times. Otherwise, return false.

*/

const movePiecesToObtainString = (start, target) => {
    // Remove all '_' and compare the sequence of Ls and Rs
    if (start.replace(/_/g, '') !== target.replace(/_/g, '')) {
      return false;
    }

    let startPointer = 0;
    let targetPointer = 0;

    while (startPointer < start.length && targetPointer < target.length) {
      // Skip blanks in start and target
      while (startPointer < start.length && start[startPointer] === '_') {
        startPointer++;
      }
      while (targetPointer < target.length && target[targetPointer] === '_') {
        targetPointer++;
      }

      // If both pointers reach the end, we are done
      if (startPointer === start.length && targetPointer === target.length) {
        return true;
      }

      // If one pointer reaches the end but the other doesn't, it's invalid
      if (startPointer === start.length || targetPointer === target.length) {
        return false;
      }

      // Check that the characters at the current pointers are the same
      if (start[startPointer] !== target[targetPointer]) {
        return false;
      }

      // Check movement constraints
      if (start[startPointer] === 'L' && startPointer < targetPointer) {
        return false; // 'L' cannot move to the right
      }
      if (start[startPointer] === 'R' && startPointer > targetPointer) {
        return false; // 'R' cannot move to the left
      }

      // Move both pointers to the next character
      startPointer++;
      targetPointer++;
    }

    return true;
  };

  // Test Cases
  console.log(movePiecesToObtainString("R__L", "RL__")); // false
  console.log(movePiecesToObtainString("R__L", "L__R")); // false
  console.log(movePiecesToObtainString("R__L", "L_R_")); // false
  console.log(movePiecesToObtainString("R_L_", "RL__")); // true
  console.log(movePiecesToObtainString("_R_L", "R__L")); // true
  console.log(movePiecesToObtainString("R_L_", "_R_L")); // false

