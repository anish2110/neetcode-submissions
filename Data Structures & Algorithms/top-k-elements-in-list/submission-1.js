class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let obj = {};

        for(const n of nums){
            if(!obj[n]){
                obj[n] = 1;
            }

            else obj[n]++;
        }


        let res = Object.keys(obj).sort((a, b) => obj[b] - obj[a]);
        return res.slice(0, k).map(Number);
    }

}