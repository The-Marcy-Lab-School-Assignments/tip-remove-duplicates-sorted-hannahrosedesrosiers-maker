/**
 * Write a function named removeDuplicates that takes an integer array `nums`
 * sorted in non-decreasing order, removes the duplicates in-place such that
 * each unique element appears only once. The relative order of the elements
 * should be kept the same.
 *
 * Returns the number of unique elements `k`.
 * The first `k` elements of `nums` should contain the unique numbers in
 * sorted order. The remaining elements beyond index `k - 1` can be ignored.
 *
 * Constraints:
 * - The array is sorted in non-decreasing order.
 * - Modify the array in-place.
 //modify the given array
 * - Return the number of unique elements.
 */

const removeDuplicates = (nums) => {
    if (nums.length === 0) return 0
    //does the array even have numbers if not there cant be duplicates [] would return 0
    let i = 0
    //slow pointer
    for (let j = 1; j < nums.length; j++ )
        //create a loop with a fast pointer(j) starts at index 1, compares each to i
    {if (nums[j] !== nums[i]){
        //checks if the current element at j is equal to the current element of i if not equal its a new number(unique)
        i++
        //moves it forward
        nums[i] = nums[j]
    }
    }
    return i + 1
    
};

// Example usage (commented out to avoid interference with tests)
// const nums1 = [1, 1, 2];
// console.log(removeDuplicates(nums1)); // → 2
// console.log(nums1); // → [1, 2, _]
//
// const nums2 = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
// console.log(removeDuplicates(nums2)); // → 5
// console.log(nums2); // → [0, 1, 2, 3, 4, _, _, _, _, _]

// Export the function for testing
module.exports = { removeDuplicates };