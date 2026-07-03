class Solution {
    encode(strs) {
        if (strs.length === 0) return "EMPTY_ARRAY_FLAG"; // Handle empty array
        
        let a = [];
        for (const str of strs) { // Use for...of
            a.push(btoa(str)); 
        }
        return a.join(",");
    }

    decode(str) {
        if (str === "EMPTY_ARRAY_FLAG") return []; 

        let b = str.split(",");
        let arr = [];
        for (const encodedStr of b) { // Use for...of
            arr.push(atob(encodedStr));
        }
        return arr;
    }
}