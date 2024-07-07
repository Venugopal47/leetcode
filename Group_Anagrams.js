Given an array of strings strs, group the anagrams together. You can return the answer in any order.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

Example 1:

Input: strs = ["eat","tea","tan","ate","nat","bat"]
Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

Example 2:

Input: strs = [""]
Output: [[""]]

Example 3:

Input: strs = ["a"]
Output: [["a"]]

# Method -1 (using sorting)

let strs=["eat","tea","tan","ate","nat","bat"]
var groupAnagrams = function(strs) {
    let string=[];
    let grouped=[];
    for(let index=0;index<strs.length;index++){
        let char=strs[index].split('');
        char.sort();
        let s1=char.toString();
        if(string.includes(s1)){
            grouped[string.indexOf(s1)].push(strs[index]);
        }
        else{
            string.push(s1);
            grouped.push([strs[index]]);
        }
    }
    return grouped;
};
console.log(groupAnagrams(strs));
