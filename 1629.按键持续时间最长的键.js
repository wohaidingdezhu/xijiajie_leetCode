/*
 * @lc app=leetcode.cn id=1629 lang=javascript
 *
 * [1629] 按键持续时间最长的键
 */

// @lc code=start
/**
 * @param {number[]} releaseTimes
 * @param {string} keysPressed
 * @return {character}
 */

var slowestKey = function (releaseTimes, keysPressed) {
  // 保存第一个键

  let firstPressKeyTime = releaseTimes[0];
  let resIndex = 0;

  for (let i = 1; i < keysPressed.length; i++) {
    let interval = releaseTimes[i] - releaseTimes[i - 1];
    if (interval > firstPressKeyTime) {
      resIndex = i;
      firstPressKeyTime = interval;
    }
    if (interval == firstPressKeyTime) {
      if (keysPressed[i].charCodeAt() > keysPressed[resIndex].charCodeAt()) {
        resIndex = i;
        firstPressKeyTime = interval;
      }
    }
  }
  return keysPressed[resIndex];
};

// slowestKey([9, 29, 49, 50], "cbcd");
// @lc code=end
