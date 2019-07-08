console.log("This is the Week 8 solution");
// 1).var array = [["a", "b", "z"], ["c", "d"], ["e", "f"], ["g", "h", "i", "j"]];

// var code = [];

// array.forEach( (ar) => {

//    ar.forEach((a) => {
//      code.push(a);
//    })

// })

// console.log(code);

// 2).var meals = [["breakfast", "pancakes with maple syrup"], ["lunch", "BLT"], ["dinner", "salmon with lemon rice"]];

// var h = {};

// meals.forEach( (meal) => {

//   h[meal[0]] = meal[1];

// })

// console.log(h);

// 3) .

// function findLongestWord(string){

//     let words = string.split(" ");

//     let w_len = 0;
//     let wsen = "";

//     words.forEach( (word) => {

//        if(w_len < word.length){
//          w_len = word.length;
//           wsen = word;
//        }

//     })

//     console.log(wsen);

//   }

//   findLongestWord("What is the longest word moreLonger in this phrase?");

// 4). mutation:

// function mutation(a , b){

//     var l = 0;
//     var bword = b.split("");
//     let s = 0;

//     for(let i = 0; i < b.length; i++){
//        if(a.includes(bword[i])){
//             s+=1;
//        }
//     }

//    if(s == b.length){
//      console.log("Yes it includes");
//    }else{
//      console.log("No it doesn't include");
//    }

// }

// mutation("burly" , "ruby");
// mutation("burly", "python");

// 5). Most Letter in Word:

// function mostA(array){

//     var ans = "";
//     var len = 0;

//     array.forEach( (ar) => {

//       var s = 0;
//       var words = ar.split("");

//           for(let i = 0; i < words.length; i++){
//               if(words[i] == 'a'){
//                   s+=1;
//               }
//           }

//           if(len < s){
//             len = s;
//             ans = ar;
//           }

//     })

//     console.log("The word is " + ans + " and the number of a's is " + len);

//   }

//   mostA(["alphabet", "aardvark", "aaaaa" ,"anarchy"])
