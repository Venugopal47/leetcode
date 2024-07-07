Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]

Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]

# Method-1(using sorting)

let nums=[2,7,11,13];
let target=9;
var twoSum = function(nums, target) {
    let length=nums.length;
    let original=nums.slice();
    let sorted=nums.sort((a,b) => a-b);
    let start=0;
    let end=length-1;
    let first;
    let second;
    while(start<end){
        if(sorted[start]+sorted[end]==target){
            first=sorted[start];
            second=sorted[end];
            break;
        }
        else if(sorted[start]+sorted[end]<target){
            start+=1;
        }
        else{
            end-=1;
        }
    }
    let c=0;
    let d=0;
    let res=[];
    for(let index=0;index<original.length;index++){
        if(original[index]==first && c==0){
            res.push(index);
            c=1;
        }
        else if(original[index]==second && d==0){
            res.push(index);
            d=1;
        }
    }
    return res;
};
console.log(twoSum(nums,target));
