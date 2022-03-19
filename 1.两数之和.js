/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  // map = new Map();
  const len = nums.length;
  // for(let i = 0; i < nums.length; i++) {
  //     x = target - nums[i]
  //     if(map.has(x)) {
  //         console.log(nums[i],i)
  //         return [map.get(x),i]
  //     }
  //     map.set(nums[i],i)
  // }
  for (let i = 0; i < len - 1; i++) {
    for (let j = i + 1; j < len; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
};

// var twoSum = function(nums, target) {
//   map = new Map()
//   for(let i = 0; i < nums.length; i++) {
//       x = target - nums[i]
//       if(map.has(x)) {
//           return [map.get(x),i]
//       }
//       map.set(nums[i],i)
//   }
// };

// twoSum([0,4,3,0],0);

twoSum([0, 4, 3, 0], 0);
twoSum([0, 4, 3, 0], 0);
console.log(twoSum([0, 4, 3, 0], 0));
// @lc code=end
