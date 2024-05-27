// function func(num) {
//   let max = 0;
//   for (let i = 0; i < num.length; i++) {
//     let currentElem = num[i];
//     max = Math.max(max, currentElem);
//   }
//   return max;
// }
// console.log(func((array = [3, 5, 2, 9, 1, 7])));
// function func(arr) {
//   let min = arr[0];
//   for (let i = 0; i < arr.length; i++) {
//     let currentElement = arr[i];
//     min = Math.min(min, currentElement);
//   }
//   return min;
// }
// console.log(func((array = [3, 5, 2, 9, 1, 7])));
// function func(arr) {
//   let sum = 0;
//   for (let elem of arr) {
//     sum += elem;
//   }
//   return sum;
// }
// console.log(func((arr = [5, 5, 5])));
// function func(arr) {
//   let l = 0;
//   let r = arr.length - 1;
//   while (l <= r) {
//     let contain = arr[l];
//     arr[l] = arr[r];
//     arr[r] = contain;
//     l++;
//     r--;
//   }
//   return arr;
// }
// console.log(func((arr = [1, 2, 3, 4, 5])));
// function func(arr) {
//   for (var i = 0; i < arr.length; i++) {
//     let currentElement = arr[i];
//     let nextElement = arr[i + 1];
//     if (currentElement < nextElement) {
//       return true;
//     } else {
//       return false;
//     }
//   }
// }
// console.log(func((arr = [6, 2, 3, 4, 5])));
// function func(arr) {
//   let i = 0;
//   for (let j = 1; j < arr.length; j++) {
//     if (arr[j] !== arr[i]) {
//       i++;
//       arr[i] = arr[j];
//     }
//   }
//   return arr.slice(0, i + 1);
// }
// console.log(func((arr = [1, 1, 2, 2, 3, 3, 4, 4])));
// function func(arr, k) {
//   debugger;
//   const length = arr.length;
//   const actualSteps = k % length;
//   console.log(actualSteps);
//   const newArr = new Array(length);
//   for (let elem of arr) {
//     let step = (elem + actualSteps) % length;
//     newArr[step] = elem;
//   }
//   return newArr;
// }
// const arr = [1, 2, 3, 4, 5, 6, 7];
// const k = 3;
// console.log(func(arr, k));
// function findKthLargest(arr, k) {
//   console.log(arr);
//   arr.sort((a, b) => a - b);
//   console.log(arr);
//   return arr[k - 1];
// }
// function func(arr) {
//   left = 0;
//   for (let right = 0; right < arr.length; right++) {
//     if (arr[right] !== 0) {
//       [arr[left], arr[right]] = [arr[right], arr[left]];
//       left++;
//     }
//   }
//   return arr;
// }
// // console.log(func((arr = [0, 1, 0, 3, 12])));
// function func(s) {
//   const sym = {
//     I: 1,
//     V: 5,
//     X: 10,
//     L: 50,
//     C: 100,
//     D: 500,
//     M: 1000,
//   };
//   let result = 0;
//   for (let i = 0; i < s.length; i++) {
//     const currentElement = sym[s[i]];
//     const nextElement = sym[s[i + 1]];
//     if (currentElement < nextElement) {
//       result += nextElement - currentElement;
//       i++;
//     } else {
//       result += currentElement;
//     }
//   }
//   return result;
// }
// console.log(func((s = "III")));
// function func(haystack, needle) {
//   let index = haystack.indexOf(needle);
//   return index === -1 ? -1 : index;
// }
// const haystack = "sadbutsad",
//   needle = "sad";
// console.log(func(haystack, needle));
// /**
//  * @param {string[]} strs
//  * @return {string}
//  */
// var longestCommonPrefix = function (arr) {
//   let i = 1;
//   let prf = arr[0]
//   while (i < arr.length) {
//     if (!arr[i].startsWith(prf)) {
//       prf = prf.slice(0, -1);
//     } else {
//       i++;
//     }
//   }
//   return prf;
// };
// // ""
// //
// // Example usage
// console.log(longestCommonPrefix(["flower", "flower", "flower"])); // Output should be "fl"
// console.log(longestCommonPrefix(["dog", "racecar", "car"])); // Output should be ""
// function lengthOfLastWord(s) {
//   let str = s.trim();
//   let lastIndexValue = str.lastIndexOf(" ");
//   console.log(lastIndexValue);
//   if (lastIndexValue === -1) {
//     return str.length;
//   } else {
//     return str.length - lastIndexValue - 1;
//   }
// }
// // Example Usage
// console.log(lengthOfLastWord("Hello World jatin")); // Output: 5
// function func(s) {
//   debugger;
//   const map = {
//     "(": ")",
//     "[": "]",
//     "{": "}",
//   };
//   const stack = [];
//   for (let i = 0; i < s.length; i++) {
//     const currentChar = s[i];
//     if (map[currentChar]) {
//       stack.push(map[currentChar]);
//     } else {
//       const anotherPart = stack.pop();
//       if (map[anotherPart] !== currentChar) {
//         return false;
//       }
//     }
//   }
//   return true;
// }
// console.log(func((s = "(]")));
// function func(s) {
//   let count = 0;
//   let output = "";
//   for (let letter of s) {
//     if (letter === "(") {
//       if (count > 0) {
//         output += letter;
//       }
//       count++;
//     } else if (letter === ")") {
//       count--;
//       if (count > 0) {
//         output += letter;
//       }
//     }
//   }
//   return output;
// }
// console.log(func((s = "(()())(())")));
// function func(s, t) {
//   if (s.length !== t.length) {
//     return false;
//   }
//   let mapStoT = {};
//   let mapTtoS = {};
//   debugger;
//   for (let i = 0; i < s.length; i++) {
//     let charS = s[i];
//     let charT = t[i];
//     if (!mapStoT[charS] && !mapTtoS[charT]) {
//       mapStoT[charS] = charT;
//       mapTtoS[charT] = charS;
//     } else {
//       if (mapStoT[charS] !== charT || mapTtoS[charT] !== charS) {
//         return false;
//       }
//     }
//   }
//   return true;
// }
// const s = "foo",
//   t = "bar";
// console.log(func(s, t));
// function func(s, t) {
//   let sortS = s.split("").sort().join("");
//   let sortT = t.split("").sort().join("");
//   return sortS === sortT;
// }
// console.log(func((s = "anagram"), (t = "nagaram")));
// function func(s, goal) {
//   if (s.length !== goal.length) return false;
//   const missMatched = [];
//   debugger;
//   for (let i = 0; i < s.length; i++) {
//     if (s[i] !== goal[i]) {
//       missMatched.push(i);
//     }
//   }
//   if (missMatched.length === 0) {
//     const charSet = new Set(s);
//     return charSet.size < s.length;
//   }
//   if (missMatched.length === 2) {
//     const [i, j] = missMatched;
//     const charS = s;
//     const charGoal = goal;
//     return charS[i] === charGoal[j] && charS[j] === charGoal[i];
//   }
//   return false;
// }
// console.log(func(s = "ab", goal = "ab"));
// function func(s) {
//   debugger
//   s.split("").sort().join("");
//   let result = [];
//   let picked = new Array(s.length).fill(false);
//   while (result.length < s.length) {
//     let lastChar = null;
//     for (let i = 0; i < s.length; i++) {
//       if (!picked[i] && (lastChar === null || s[i] > lastChar)) {
//         result.push(s[i]);
//         picked[i] = true;
//         lastChar = s[i];
//       }
//     }
//     lastChar = null;
//     for (let j = s.length - 1; j >= 0; j--) {
//       if (!picked[j] && (lastChar === null || s[j] < lastChar)) {
//         result.push(s[j]);
//         picked[j] = true;
//         lastChar = s[j];
//       }
//     }
//   }
//   return result.join("");
// }
// console.log(func(("rat")));
