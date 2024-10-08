/*

You are given a 0-indexed string s of even length n. The string consists of exactly n / 2 opening brackets '[' and n / 2 closing brackets ']'.

A string is called balanced if and only if:

It is the empty string, or
It can be written as AB, where both A and B are balanced strings, or
It can be written as [C], where C is a balanced string.
You may swap the brackets at any two indices any number of times.

Return the minimum number of swaps to make s balanced.

*/

const minSwaps = s => {
    let imbalance = 0;
    let swaps = 0;

    for (let i = 0; i < s.length; i++) {
      if (s[i] === '[') {
        imbalance++; // Increase balance for opening bracket
      } else {
        imbalance--; // Decrease balance for closing bracket
      }

      // If imbalance is negative, it means we need to "swap"
      if (imbalance < 0) {
        swaps++; // Increment swap count
        imbalance = 1; // Reset imbalance as we're simulating a swap
      }
    }

    return swaps;
  }

  // Test Cases
  console.log(minSwaps('][][')); // 1
  console.log(minSwaps(']]][[[')); // 2
  console.log(minSwaps('[]')); // 0
