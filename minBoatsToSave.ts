const numRescueBoats = (people: number[], limit: number): number => {
    people.sort((a, b) => a - b);
    let left = 0;
    let right = people.length - 1;
    let boats = 0;

    while (left <= right) {
        if (people[left] + people[right] <= limit) {
            // If both can share a boat, move the left pointer as well
            left++;
        }
        // Move the right pointer indicating the heaviest person is taken care of
        right--;
        // Every iteration of this loop counts as one boat
        boats++;
    }

    return boats;
}
