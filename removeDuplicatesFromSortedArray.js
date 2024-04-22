// Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same. Then return the number of unique elements in nums.

// Consider the number of unique elements of nums to be k, to get accepted, you need to do the following things:

// Change the array nums such that the first k elements of nums contain the unique elements in the order they were present in nums initially. The remaining elements of nums are not important as well as the size of nums.
// Return k.

const removeDuplicates = nums => {
    if (nums.length === 0) return 0;
    let i = 0;
    for (let j = 1; j < nums.length; j++) {
        if (nums[j] !== nums[i]) {
            i++;
            nums[i] = nums[j];
        }
    }
    return i + 1;
}

// test cases
arr1 = [1,1,2]
arr2 = [0,0,1,1,1,2,2,3,3,4]

console.log(`${removeDuplicates(arr1)} ${arr1}`) // expect 2, [1,2]
console.log(`${removeDuplicates(arr2)} ${arr2}`) // expect 5, [0,1,2,3,4]
