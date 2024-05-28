// ----------------------------------------------------------------------- Anagram

// function cleanString(string) {
//   return string.toLowerCase().split("").sort().join("");
// }

// function anagrams(string1, string2) {
//   return cleanString(string1) === cleanString(string2);
// }

// console.log(anagrams("Hi there", "Bye there"));

// ----------------------------------------------------------------------- capitalize

// function capitalize(sentence) {
//   return sentence
//     .split(" ")
//     .map((word) => {
//       return word.charAt(0).toUpperCase() + word.slice(1);
//     })
//     .join(" ");
// }

// function capitalize(str) {
//   let result = str[0].toUpperCase();
//   for (let i = 1; i < str.length; i++) {
//     if (str[i - 1] === " ") {
//       result += str[i].toUpperCase();
//     } else {
//       result += str[i];
//     }
//   }

//   return result;
// }

// console.log(capitalize("a short sentence"));

// ----------------------------------------------------------------------- divide in chunk size

// function chunk(array, size) {
//   let result = [];
//   let index = 0;

//   while (index < array.length) {
//     result.push(array.slice(index, size + index));
//     index += size;
//   }

//   return result;
// }

// console.log(chunk([1, 2, 3, 4, 5, 6, 7, 8, 9], 2));

// --------------------------------------------------------- Print out the n-th entry in the fibonacci series

// function fib(n) {
//   let result = [0, 1];

//   for (let i = 2; i < n; i++) {
//     let a = result[i - 1];
//     let b = result[i - 2];

//     result.push(a + b);
//   }
//   return result[n - 1];
// }

// console.log(fib(6));

// --------------------------------------------------------- Max character

// function maxCharacter(str) {
//   let obj = {};
//   let max = 0;
//   let maxChar;

//   for (let value of str) {
//     if (obj[value]) {
//       obj[value]++;
//     } else {
//       obj[value] = 1;
//     }
//   }

//   for (let v in obj) {
//     if (obj[v] > max) {
//       max = obj[v];
//       maxChar = v;
//     }
//   }

//   return maxChar;
// }

// console.log(maxCharacter("arrrrrrrbccccccccccfff"));

// --------------------------------------------------------- Mid point or end of the first half

// let arr = [1, 2, 3, 4, 5, 6];

// function findMid(arr) {
//   return arr[parseInt((arr.length - 1) / 2)];
// }

// console.log(findMid(arr));

// --------------------------------------------------------- Palidrom by using every

// function pelidrom(str) {
//   return str.split("").every((value, index) => {
//     return value === str[str.length - index - 1];
//   });
// }

// console.log(pelidrom("qwerewq"));

// --------------------------------------------------------- Example Some

// function someExample(nums) {
//   return nums.split("").some((value) => {
//     return value > 6;
//   });
// }

// console.log(someExample("1234567"));

// --------------------------------------------------------- pyramid

// function pyramid(n) {
//   for (i = 0; i < n; i++) {
//     let pattern = "";
//     for (let j = n - 1; j > i; j--) {
//       pattern += " ";
//     }
//     for (let k = 0; k <= i; k++) {
//       pattern += "* ";
//     }
//     console.log(pattern);
//   }
// }

// pyramid(5);

// --------------------------------------------------------- Reverse Intiger

// let str = "";

// function reverseInt(str) {
//   let reversed = str.toString().split("").reverse().join("");

//   return parseInt(reversed) * Math.sign(str);
// }

// console.log(reverseInt("-1234"));

// --------------------------------------------------------- Reverse string by for of

// function reverseString(str) {
//   let reversed = "";
//   for (let v of str) {
//     reversed = v + reversed;
//   }
//   console.log(reversed);
// }

// reverseString("asdfg");
