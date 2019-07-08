console.log("week - 3 solution");

// 1). Even Numbers :
// let numbers = [1, 2, 4, 2];

// var code = numbers.filter(n => n % 2 == 0);

// console.log(code);

// 2).

// movies = [
//   { id: 1, title: "Die Hard", rating: 4.0 },
//   { id: 2, title: "Bad Boys", rating: 5.0 },
//   { id: 3, title: "The Chamber", rating: 3.0 },
//   { id: 4, title: "Fracture", rating: 2.0 }
// ];

// var code = movies.filter(movie => movie.rating < 4.0);

// console.log(code);

// 3).

// 4).Palindrome:

// function palindrome(word){

//     var or = word.split("");
//     var a = [];
//     var l = or.length;
//     for(let i = 0; i < l; i++){
//      a.push(or.pop());
//     }

//     if(a.join("") == word){
//       console.log("They are palindrome");
//     }else{
//       console.log("They are not palindrome");
//     }

//   }

//   palindrome("racecar");
//   palindrome("wazzzzup");

// 5). SPlit Array :

function split_array(a, b) {
  var l = a.length / b;

  var arr = [];

  for (let i = 0; i < l; i++) {
    let c = a.splice(0, b);
    arr.push(c);
  }

  console.log(arr);
}

split_array([0, 1, 2, 3, 4, 5], 2);
split_array([0, 1, 2, 3, 4, 5], 3);
