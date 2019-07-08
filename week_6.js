console.log("This is Week 6 Solution");

// 1). Ternary Operator:

// let x = 7;

// let code = x > 10 ? "It is a Big number " : "It is a small number";

// console.log(code);

// 2).

// let sentences = ["hello", "old friend", "today", "mac and cheese"];

// var ar = [];

// sentences.forEach( (sentence) => {

//   var c = sentence.split(" ").length;

//   if(c > 1){
//     var c = sentence.charAt(0).toUpperCase();
//     sentence = c + sentence.slice(1);
//   }

//   ar.push(sentence);

// })

// console.log(ar);

// 3).

// 4). Is Prime :

// function prime(n){

//     let s = 0;

//     let num = 1;

//     while(num <= n){

//        if(n % num == 0){
//            s += 1;
//        }

//       num += 1;
//     }

//     if(s == 2){
//       console.log("It is a Prime number")
//     }else{
//       console.log("It is not a prime number");
//     }

//   }

//   prime(8);
//   prime(7);
//   prime(11);

// 5). Find_the_most_A's:

// function find_the_most_letter_a(a){

//     var cc = 0;
//     let w = "";

//     a.forEach((word) => {

//        var c = word.split("");
//        var s = 0;

//        for(let i = 0; i < c.length; i ++){
//           if(c[i] == 'a' ){
//             s += 1;
//           }
//        }

//        console.log(s);

//        if(cc < s){
//          cc = s;
//          w = word;
//        }

//     })

//     console.log(w);

//   }

//   find_the_most_letter_a(["alphabet", "aardvark", "aaaaa", "anarchy"])
