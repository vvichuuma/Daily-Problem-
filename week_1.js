console.log("This is week 1");

//week - 1:
//1). var numbers = [1, 2, 4, 2];
// var num = [1, 2, 4, 2];

// let sum = 0;

// num.forEach(n => {
//   sum += n;
// });

// console.log("THe sum is " + sum);

// 2).Double numbers :

// var Double_numbers = [4, 1, 3];

// let ans = Double_numbers.map(d => d * 2);

// console.log(ans);

// 3).

// 4).

// 5). Average:

let sum = 0;

function average(a) {
  a.forEach(n => {
    sum += n;
  });

  let l = a.length;

  console.log("The average is " + sum / l);
}

average([2, 1, 7, 5]);
