
Given two strings s and t, return true if t is an anagram of s, and false otherwise.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

# Example 1:

Input: s = "anagram", t = "nagaram"
Output: true

# Example 2:

Input: s = "rat", t = "car"
Output: false


let s="car";
let t="rat";
var isAnagram = function(s, t) {
    if(s.length!=t.length){
        return false;
    }

# Method -1 (using sorting)

    // let string1=s.split('').sort().join('');
    // let string2=t.split('').sort().join('');
    // return string1==string2;

# Method -2 (using map)

    let map=new Map();
    for(let index=0;index<s.length;index++){
        if(map.has(s.charAt(index))){
            let value=map.get(s.charAt(index));
            map.set(s.charAt(index),value+1);
        }
        else{
            map.set(s.charAt(index),1);
        }
    }
    for(let index=0;index<t.length;index++){
        if(map.has(t.charAt(index))){
            let value=map.get(t.charAt(index));
            map.set(t.charAt(index),value-1);
        }
        else{
            map.set(t.charAt(index),1);
        }
    }
    for(let element of map.values()){
        if(element!=0){
            return false;
        }
    }
    return true;
};
console.log(isAnagram(s,t));
