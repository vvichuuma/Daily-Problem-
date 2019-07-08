console.log("This is week 11 solution");

//1).
// Given an array with every element repeated twice except one, find the unique element. For example if given array is [1, 1, 2, 2, 3, 4, 4, 5, 5] then your program should return 3.

// var array = [1, 1, 2, 2, 3, 4, 4, 5, 5];

// function duplicate(array) {
//   var h = {};

//   let l = array.length;

//   for (let i = 0; i < l; i++) {
//     if (h[array[i]]) {
//       h[array[i]] += 1;
//     } else {
//       h[array[i]] = 1;
//     }
//   }

//   //console.log(h);

//   var intNum = [];

//   for (let j = 0; j < l; j++) {
//     if (h[array[j]] == 1) {
//       intNum.push(array[j]);
//     }
//   }

//   console.log("The number is " + intNum[0]);
// }

// duplicate(array);

//2). First Repeating ELement:

// function firstRepeat(array) {
//   var c = 0;
//   array.forEach(a => {
//     let s = 0;

//     for (let i = 0; i < array.length; i++) {
//       if (a == array[i]) {
//         s += 1;
//         pos = i;
//       }

//       if (s > 1) {
//         if (c == 0) {
//           c = pos;
//         } else if (pos < c) {
//           c = pos;
//         }
//       }
//     }
//   });

//   //console.log(c);
//   console.log("The First repeating element is " + array[c]);
// }

// firstRepeat([10, 5, 2, 2, 7, 5, 3, 7, 4, 5, 6]);
// firstRepeat([2, 3, 2, 3, 1, 5, 1, 12, 13, 2, 5, 7, 5]);

//3). Second smallest in an array :

// let array = [1, 7, 30, 9, 14];

// let ans = array.sort(function(a, b) {
//   return a > b;
// });

// console.log(ans);
//console.log(ans[k]);

//4). Largest Number :

// let array = [12, 10, 69, 8, 24, 1, 5, 73, 6];

// function largeNumber(array) {
//   let ans = [];

//   for (let i = 0; i < 2; i++) {
//     var c = 0;

//     array.forEach(a => {
//       if (c < a) {
//         c = a;
//       }
//     });

//     ans.push(c);
//     let cd = array.indexOf(c);
//     array.splice(cd, 1);
//   }

//   console.log(ans);
// }

// largeNumber(array);

//5).

// function sumEqual(a, b) {
//   var ans = [];

//   for (let i = 0; i < a.length; i++) {
//     for (let j = 0; j < a.length; j++) {
//       if (i != j && a[i] + a[j] == b) {
//         ans.push([a[i], a[j]]);
//       }
//     }
//   }

//   ans.forEach(a => {
//     for (let i = 0; i < ans.length; i++) {
//       if (a[0] == ans[i][1] && a[1] == ans[i][0]) {
//         ans.splice(i, 1);
//       }
//     }
//   });

//   console.log(ans);
// }

// sumEqual([2, 5, 3, 1, 9, 7, 5, 4], 10);
