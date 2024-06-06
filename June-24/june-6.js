/*
Alice has some number of cards and she wants to rearrange the cards into groups so that each group is of size groupSize, and consists of groupSize consecutive cards.

Given an integer array hand where hand[i] is the value written on the ith card and an integer groupSize, return true if she can rearrange the cards, or false otherwise.
*/

const isNStraightHand = (hand, groupSize) => {
    if (hand.length % groupSize !== 0) return false;

    const freqMap = new Map();

    // Count the frequency of each card in the hand
    for (let card of hand) {
        freqMap.set(card, (freqMap.get(card) || 0) + 1);
    }

    const uniqueCards = Array.from(freqMap.keys()).sort((a, b) => a - b);

    // Try to form groups starting from the smallest card
    for (let card of uniqueCards) {
        if (freqMap.get(card) > 0) {
            let count = freqMap.get(card);
            for (let i = 0; i < groupSize; i++) {
                let currCard = card + i;
                if ((freqMap.get(currCard) || 0) < count) {
                    return false;
                }
                freqMap.set(currCard, freqMap.get(currCard) - count);
            }
        }
    }

    return true;
}

// Test Cases
console.log(isNStraightHand([1,2,3,6,2,3,4,7,8],3)); // Expect true
console.log(isNStraightHand([1,2,3,4,5],4)); // Expect false
