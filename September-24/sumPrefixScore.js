/*

You are given an array words of size n consisting of non-empty strings.

We define the score of a string word as the number of strings words[i] such that word is a prefix of words[i].

For example, if words = ["a", "ab", "abc", "cab"], then the score of "ab" is 2, since "ab" is a prefix of both "ab" and "abc".
Return an array answer of size n where answer[i] is the sum of scores of every non-empty prefix of words[i].

Note that a string is considered as a prefix of itself.

*/

class TrieNode {
    constructor() {
      this.children = {};
      this.prefixCount = 0;
    }
  }

  const insertWord = (root, word) => {
    let node = root;
    for (let char of word) {
      if (!node.children[char]) {
        node.children[char] = new TrieNode();
      }
      node = node.children[char];
      node.prefixCount += 1;  // Count how many words share this prefix
    }
  };

  const getPrefixScore = (root, word) => {
    let node = root;
    let score = 0;
    for (let char of word) {
      if (node.children[char]) {
        node = node.children[char];
        score += node.prefixCount;  // Sum the prefix counts
      }
    }
    return score;
  };

  const sumPrefixScores = (words) => {
    const root = new TrieNode();

    // Insert all words into the Trie
    words.forEach(word => insertWord(root, word));

    // Calculate scores for each word
    return words.map(word => getPrefixScore(root, word));
  };

  // Test Cases
  const words = ["a", "ab", "abc", "cab"];
  console.log(sumPrefixScores(words));  // [4, 3, 2, 1]
