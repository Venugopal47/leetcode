Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.
  
Example 1:

Input: nums = [1,2,3,1]
Output: true

Example 2:

Input: nums = [1,2,3,4]
Output: false

Example 3:

Input: nums = [1,1,1,3,3,4,3,2,4,2]
Output: true

# Method-1 (using sorting)

let nums=[1,2,3,4,3];
var containsDuplicate = function(nums) {
    nums.sort();
    for(let index=1;index<nums.length;index++){
        if(nums[index]==nums[index-1]){
            return true;
        }
    }
    return false;
};
console.log(containsDuplicate);

# Method-2 (using set)

let set=new Set();
for(let index=0;index<nums.length;index++){
    set.add(nums[index]);
}
return set.size!=nums.length;
