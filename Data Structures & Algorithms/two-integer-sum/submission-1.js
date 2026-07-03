class Solution {
    twoSum(nums, target) {
        // Map to store { number: index }
        const numIndices = new Map();

        for (let i = 0; i < nums.length; i++) {
            let complement = target - nums[i];

            // If the complement exists in our map, we found the pair
            if (numIndices.has(complement)) {
                return [numIndices.get(complement), i];
            }

            // Otherwise, store the current number and its index
            numIndices.set(nums[i], i);
        }
    }
}