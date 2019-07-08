console.log("This is week - 2");

//1).Map Method:

// let numbers = [1, 2, 4, 2];

// var ans = numbers.map(n => n * 2);

// console.log(ans);

// 2).

// var items = [
//   { id: 1, body: "foo" },
//   { id: 2, body: "bar" },
//   { id: 3, body: "foobar" }
// ];

// var ans = items.map(item => item.id);

// console.log(ans);

// 3).

// var fruits = [
//   { name: "apple", color: "red" },

//   { name: "banana", color: "yellow" },

//   { name: "grape", color: "purple" }
// ];

// let h = {};

// for (let i = 0; i < fruits.length; i++) {
//   h[fruits[i]["name"]] = fruits[i]["color"];
// }

// console.log(h);

// 4). Reverse a String:

// function reverse(String) {
//   let l = String.length;
//   var ar = [];
//   var a = String.split("");

//   for (let i = 0; i < l; i++) {
//     ar[i] = a.pop();
//   }

//   var ans = ar.join("");
//   console.log(ans);
// }

// reverse("Code");

// 5).

function longestWord(str) {
  let words = str.split(" ");
  let code = "";
  let l = 0;

  words.forEach(word => {
    if (l < word.length) {
      l = word.length;
      code = word;
    }
  });

  console.log("THe Longest word is " + code);
}
longestWord("This is the Longest word longessttt in the sentence");
