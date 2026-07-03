class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let set = new Set(nums);

        for(let i=0; i<nums.length; i++){
            if(set.has(target - nums[i])) {
                let idx = [...set].indexOf(target-nums[i]);

                if(idx === i) continue;

                return [i, idx] 
            }
        }
    }
}
