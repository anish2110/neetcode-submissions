class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length) return false;

        let obj = {};

        for(const s1 in s){
            if(!obj[s.charAt(s1)]){
                obj[s.charAt(s1)] = [1,0];
            }

            else {
                obj[s.charAt(s1)] = [obj[s.charAt(s1)][0] + 1, 0];
            }
        }

        for(const t1 in t){
            if(!obj[t.charAt(t1)]){
                return false;
            }

            else {
                obj[t.charAt(t1)] = [obj[t.charAt(t1)][0], obj[t.charAt(t1)][1]+1];
            }
        }

        for(const k in obj){
            if(obj[k][0] !== obj[k][1]) return false;
        }

        return true;
    }
}
