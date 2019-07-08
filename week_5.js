console.log("This is Week 5");

// 1).Sort by age:

// var people = [

//     {
//       name: "Saron",
//       age: 34
//     },

//     {
//       name: "Majora",
//       age: 28
//     },

//     {
//      name: "Danilo",
//      age: 45
//     }
//    ]

//    var c = people.sort(function(a,b){
//      return (a.age-b.age);
//    })

//    console.log(c);

//2). Sort By age then by name:

// var people = [
//     {name: "bob", age: 15, gender: "male"},
//     {name: "alice", age: 25, gender: "female"},
//     {name: "bob", age: 56, gender: "male"},
//     {name: "dave", age: 45, gender: "male"},
//     {name: "alice", age: 56, gender: "female"},
//     {name: "adam", age: 15, gender: "male"}
//   ]

//   var sortByName = people.sort(function(a,b){
//     return a.name > b.name;
//   })

//   var sortByAge = sortByName.sort(function(a,b) {
//     return a.age > b.age;
//   })

//   console.log(sortByAge);

// 3).
// var movies = [
//     {id: 1, title: "Die Hard", rating: 4.0},
//     {id: 2, title: "Bad Boys", rating: 5.0},
//     {id: 3, title: "The Chamber", rating: 3.0},
//     {id: 4, title: "Fracture", rating: 2.0}
//   ]

//   var c = movies.sort(function(a,b) {
//     return (a.rating < b.rating);
//   });

//   var code = c.map(cc => cc.title);

//   console.log(code);

// 4).

// 5).function find_missing_letter(word) {

//     //Generating alphabet Begin:
//      var gh = word.split("");

//       var charA = gh[0];
//       var charZ = gh[gh.length - 1];

//        var a = [], i = charA.charCodeAt(0), j = charZ.charCodeAt(0);
//        for (; i <= j; ++i) {
//            a.push(String.fromCharCode(i));
//        }

//      // Generating alphabet ENd:

//        var so = [];

//      for(let z = 0; z < a.length; z++){
//        if(!word.includes(a[z])){
//          so.push(a[z])
//        }
//      }

//      console.log(so);

//    }

//    find_missing_letter("opqrsuv");
//     find_missing_letter("xyz");
