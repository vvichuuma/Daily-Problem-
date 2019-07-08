console.log("This is Week 7 Solution");

// 1).let address = "665 Clinton Lane, Wilkes Barre, PA 18702";

// let code = (address.replace(new RegExp("[0-9]","g"), "_"));

// console.log(code);

// 2).
// function code(sentence){

//     let word = sentence.split(" ");

//     let ar = [];

//     word.forEach((w) => {
//         if( (w.length  == 4) && w[0] == "l" && w[w.length - 1] == "e" ){
//           w = w[0].toUpperCase() + w.slice(1);
//         }
//        ar.push(w);
//     })

//    console.log(ar.join(" "));

//  }

//  code("You can live like a king but make sure it isn't a lie.")

// 3).

// let sentence = "You can live like a king but make sure it isn't a lie.";

// var c = sentence.split(" ");

// var a = [];

// c.forEach((word) => {

//   if(word[0] == 'l' || word[0] == 'L'){
//     word = word.replace(word, 'fake');
//   }

//   a.push(word);

// })

// console.log(a.join(" "));

// 4). function isPrime(n){

//     let c = 1;
//     var primeArray = [];

//     while(c <= n ){

//         let co = 1;
//         let s = 0;

//       while(co <= c){

//         if( c % co == 0){
//            s += 1;
//         }
//           co += 1;
//       }

//        if(s == 2){
//          primeArray.push(c);
//        }

//        c = c + 1

//     }

//     let l = primeArray.length;

//     console.log(primeArray[l-1]);

//   }

//   isPrime(12);

// 5). IsBalanced:

// function isBalanced(string){

//     var h = {

//       "}" : "{",
//       "]" : "[",
//       ")" : "(",
//       ">" : "<"
//     }

//     var c = string.split("");
//     let l = c.length;
//     var n = 1;
//     var sum = 0;

//     for(let i = 0; i < l / 2; i++){
//       if(c[i] == h[c[l - n]]){
//          sum += 1;
//       }

//       n += 1;
//     }

//     if(sum == l/2){
//       console.log('They are balanced');
//     }else{
//       console.log("They are not balanced");
//     }

//   }

//   isBalanced("<{[()]}>");
//   isBalanced('<[]>');
//   isBalanced('<[]/>');
