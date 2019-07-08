console.log("This is week 4");

// 1).

// 2). Scrabble score:

// function Scrabble(word){

//     points = {
//       a: 1,
//       b: 2,
//       c: 3,
//       d: 4,
//       e: 5
//     }

//     var l = word.length;
//     var s = 0;

//     for(let i = 0; i < l; i++){
//       if(points[word[i]]){
//         s+=points[word[i]]
//       }
//     }

//    console.log(s);

//   }

//   Scrabble("cad");
//   Scrabble("aaa");

// 3).Total - amount - of words:

// items = [
//     {title: "NoDBA", words: 561, tags: ["nosql", "people", "orm"], type: "book"},
//     {title: "Infodeck", words: 1145, tags: ["nosql", "writing"], type: "book"},
//     {title: "OrmHate", words: 1718, tags: ["nosql", "orm"], type: "book"},
//     {title: "ruby", words: 1313, tags: ["ruby"], type: "article"},
//     {title: "DDD_Aggregate", words: 482, tags: ["nosql", "ddd"], type: "book"}
//   ]

//   var c1 = items.filter(item => item.type == "book");

//   var c2 = c1.map(cc => cc.words);

//   var c3 = c2.reduce( (acc, c2 )  => acc += c2 );

//   console.log(c3);

// 4). Mutation:

// function mutation(word_1, word_2){

//     var s = 0;

//     var l = word_2.length;
//     var code = word_2.split("");

//     for(let i = 0; i < l; i++){
//        if(word_1.includes(code[i])){
//          s += 1;
//        }
//     }

//    if(s == code.length){
//      console.log("They are equal")
//    }else{
//      console.log("THey are not equal");
//    }

//  }

//  mutation("burly" , "ruby");
//  mutation("burly", "python")

// 5). Sum of Range:

// function sumOfRange([a,b]){

//     var s = 0;

//     if(a < b){
//       for(let i = a; i <= b; i++ ){
//           s += i
//       }
//     }else if(a > b){
//       for(let i = a; i >= b; i--){
//         s += i;
//       }
//     }

//    console.log(s);

//   }

//   sumOfRange([1,4]);
//   sumOfRange([4,1]);
