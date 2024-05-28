//------------------------------------------- Given a string, reverse each word in the sentence

// var string = "Welcome to this Javascript Guide!";

// let A = string.split("").reverse().join("");

// console.log(A);

// let B = A.split(" ").reverse().join(" ");

// console.log(B);

//------------------------------------------- How to check if an object is an array or not? Provide some code

// let arrayList = [1, 2, 3];

// let arrayList = { a: 1, b: 2, c: 3 };

// console.log(Array.isArray(arrayList));

//------------------------------------------- How would you check if a number is an integer

// let num = 9;
// let num = 9.8;

// console.log(num % 1 === 0);

//------------------------------------------- How would you check number is divisible with any another number

// function isDivisibe(num, divideBy) {
//   console.log(num % divideBy === 0);
// }

// isDivisibe(27, 3);

//------------------------------------------- How would you convert array to coma seperate

// let arr = [1, 2, 3, 4];
// console.log(arr.join(","));

//------------------------------------------- How remove dulpicate value from array

// let arr = [1, 6, 6, 2, 3, 4, 3, 4, 1, 2, 5];

// function removeDup(arr) {
//   return arr.filter((value, index, self) => {
//     return self.indexOf(value) === index;
//   });
// }

// console.log(removeDup(arr));

//------------------------------------------- Create new array of duplicate value

// let arr = [1, 2, 3, 4, 3, 4, 1, 2, 2, 2, 3, 5, 6, 6, 6];

// let duplicate = arr.filter((v, i, a) => a.indexOf(v) !== i);

// console.log(duplicate);

//------------------------------------------- How would you add values in array

// let arr1 = [1, 2, 3, 4, 5];
// let arr2 = [6, 7, 8];

// let arr3 = arr1.concat(arr2);

// console.log(arr3);

//------------------------------------------- Write a "mul" function which will properly when invoked as below syntax

// function mul(a) {
//   return function (b) {
//     return function (c) {
//       return a * b * c;
//     };
//   };
// }

// let abc = mul(2)(3)(4);

// console.log(abc);

//------------------------------------------- Write a infinite curring function

// function infCurring(a) {
//   return function (b) {
//     if (b) return infCurring(a * b);
//     return a;
//   };
// }

// console.log(infCurring(1)(2)(3)(4)(6)(7)());

//------------------------------------------- Given two strings, return true if they are anagrams of one another

// var firstWord = "Mary";
// var secondWord = "army";

// function isAna(w1, w2) {
//   return (
//     w1.toLowerCase().split("").sort().join() ===
//     w2.toLowerCase().split("").sort().join()
//   );
// }

// console.log(isAna(firstWord, secondWord));

//------------------------------------------- How would you use a closure to create a private counter?

// function counter() {
//   let counter = 0;
//   return {
//     add: function (increment) {
//       counter += increment;
//     },
//     retrieve: function () {
//       return "The counter is currently at: " + counter;
//     },
//   };
// }

// var c = counter();
// c.add(5);
// c.add(9);

// var d = counter();
// d.add(5);
// d.add(5);

// console.log(c.retrieve());
// console.log(d.retrieve());

//------------------------------------------- What will be the output of the following code?

// let y = 1;

// if (function f() {}) {
//   y += typeof f;
// }
// console.log(y);

// var k = 1;
// if (1) {
//   eval(function foo() {});
//   k += typeof foo;
// }
// console.log(k);

// (function () {
//   let a = (b = 5);
// })();

// console.log(b);
// console.log(a);

//------------------------------------------- reverse number

// let str = "hello";

// function reverseString(str) {
//   return str.split("").reverse().join("");
// }
// console.log(reverseString(str));

//------------------------------------------- find Max num

// let numArr = [2, 44, 7, 9, 19, 15, 33];

// console.log(Math.max(...numArr));

// by manually

// let maxNumber;
// numArr.forEach((num, index) => {
//   if (index === 0) maxNumber = num;
//   if (maxNumber < num) {
//     maxNumber = num;
//   }
// });
// console.log(maxNumber);

//------------------------------------------- Check for Palindrome

// let str = "abcdefg";
// let str = "Level";

// function palindrome(params) {
//   return (
//     params.toLowerCase().split("").reverse().join("") === params.toLowerCase()
//   );
// }

// console.log(palindrome(str));

//------------------------------------------- FizzBuzz

// for (let index = 1; index <= 100; index++) {
//   switch (true) {
//     case index % 3 === 0 && index % 5 === 0:
//       console.log("FizzBuzz");
//       break;
//     case index % 3 === 0:
//       console.log("Fizz");
//       break;
//     case index % 5 === 0:
//       console.log("Buzz");
//       break;
//     default:
//       console.log(index);
//       break;
//   }
// }

// ------------------------------------------- Fectorial by iterative approaches

// const factorialIterative = (n) => {
//   if (n < 0) {
//     return undefined;
//   }

//   let result = 1;
//   for (let i = 1; i <= n; i++) {
//     result = result * i;
//   }
//   return result;
// };

// console.log(factorialIterative(2));

//------------------------------------------- Fectorial by recursive approaches

// const fectorialRecursive = (n) => {
//   if (n < 0) {
//     return undefined;
//   }
//   if (n === 0 || n === 1) {
//     return 1;
//   }

//   return n * fectorialRecursive(n - 1);
// };

// console.log(fectorialRecursive(2));

//------------------------------------------- Array Sum

// let arr = [1, 2, 3, 4, 5, 6];

// function sum(arr) {
//   let result = 0;

//   arr.forEach((num) => {
//     result += num;
//   });
//   return result;
// }

// console.log(sum(arr));

//------------------------------------------- Array Sum by reduce method

// let arr = [2, 3, 2];

// function sumReduce(arr) {
//   return arr.reduce((total, value, index, self) => {
//     return total + value;
//   }, 100);
// }

// const result = sumReduce(arr);

// console.log(result);

//------------------------------------------- find max value

// let arr = [1, 22, 33, 4, 5, 6, 7, 8];

// console.log(Math.max(...arr));

//------------------------------------------- find max value with out using Math.max()

// const arr = [111, 222, 333];

// function findMax(inputArr) {
//   let result = inputArr[0];

//   for (let index = 0; index <= inputArr.length; index++) {
//     if (result < inputArr[index]) result = inputArr[index];
//   }
//   return result;
// }

// const result = findMax(arr);

// console.log(result);

//------------------------------------------- Remove Duplicates from the array by using new Set(arr)

// const arr = [3, 5, 6, 8, 9, 5, 8, 3];

// console.log([...new Set(arr)]);

//------------------------------------------- Remove Duplicates from the array by using filter

// const arr = [1, 222, 33, 33, 1, 2, 2, 2, 1, 5];

// function removeDuplicates(arr) {
//   return arr.filter((value, index, array) => array.indexOf(value) === index);
// }

// console.log(removeDuplicates(arr));

//------------------------------------------- Remove Duplicates from the array by for loop

// const arr = [2, 4, 6, 7, 8, 9];

// function removeDuplicates(arr) {
//   let newArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (!newArr.includes(arr[i])) newArr.push(arr[i]);
//   }
//   return newArr;
// }

// console.log(removeDuplicates(arr));

//------------------------------------------- Remove Duplicates from the array by using for of and for in

// const arr = [1, 222, 33, 33, 1, 2, 2, 2, 1, 5, 5, 9];

// function removeDuplicates(arr) {
//   let newArr = [];
//   for (const num of arr) {
//     if (!newArr.includes(num)) newArr.push(num);
//   }
//   return newArr;
// }

// function removeDuplicates(ar) {
//   let newArray = [];
//   for (let index in ar) {
//     if (!newArray.includes(ar[index])) newArray.push(ar[index]);
//   }

//   return newArray;
// }

// console.log(removeDuplicates(arr));

//------------------------------------------- Reverse Array

// const arr = [1, 2, 3, 4, 5, 6];

// function reverceArray(arr) {
//   return arr.reverse();
// }

// console.log(reverceArray(arr));

//------------------------------------------- Reverse Array without using reverse()

// const arr = [1, 2, 3, 4, 5, 6, 7];

// function reverceArray(arr) {
//   let result = [];
//   for (let i = arr.length - 1; i >= 0; i--) {
//     result.push(arr[i]);
//   }
//   return result;
// }

// console.log(reverceArray(arr));

//------------------------------------------- Anagram Check

// const stringOne = "abcd";

// const stringTwo = "AdCb";

// function checkAnagram(StrOne, StrTwo) {
//   return (
//     StrOne.toLowerCase().split("").sort().join("") ===
//     StrTwo.toLowerCase().split("").sort().join("")
//   );
// }

// console.log(checkAnagram(stringOne, stringTwo));

//------------------------------------------- Longest Word

// const sentence = "i am sachin patel";

// function findLongestWord(sentence) {
//   const words = sentence.split(" ");

//   let result = "";

//   for (const word of words) {
//     if (word.length > result.length) {
//       result = word;
//     }
//   }

//   return result;
// }

// console.log(findLongestWord(sentence));

//------------------------------------------- Array Rotation

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

// function rotateArrByNum(n) {
//   let result = [];

//   result.push(...arr.slice(-n));
//   result.push(...arr.slice(0, arr.length - n));

//   console.log(result);
// }

// rotateArrByNum(9);

//------------------------------------------- Duplicate Elements

// const arr = [1, 222, "ww", 33, 1, 2, 2, 2, 1, 5, 5, 9, 9, 9, 9, 9];

// function findDuplicate(array) {
//   let duplicates = [];

//   array.forEach((value, index, arr) => {
//     if (arr.indexOf(value) !== index && !duplicates.includes(value)) {
//       duplicates.push(value);
//     }
//   });

//   return duplicates;
// }

// console.log(findDuplicate(arr));

//------------------------------------------- Check prime number

// function isPrime(num) {
//   if (num === 0 || num === 1) {
//     return "0 and 1 is nighter prime nor composite";
//   }

//   for (let i = 2; i < num; i++) {
//     if (num % i === 0) {
//       return `${num} is not prime number`;
//     }
//   }
//   return `${num} is prime number`;
// }

// console.log(isPrime(2));

//------------------------------------------- Return the array of prime number till n

// function returnPrimeNumbersArr(n) {
//   let result = [];

//   for (let i = 2; i <= n; i++) {
//     let isPrime = true;
//     for (let j = 2; j < i; j++) {
//       if (i % j === 0) {
//         isPrime = false;
//         break;
//       }
//     }
//     if (isPrime) result.push(i);
//   }
//   return result;
// }

// let start = Date.now();
// console.log(returnPrimeNumbersArr(100));
// let end = Date.now();

// console.log(end - start);

//------------------------------------------- Object Manipulation

// const objs = [
//   { name: "sachin", age: 20 },
//   { name: "reema", age: 10 },
//   { name: "patel", age: 5 },
//   { name: "patel", age: 9 },
// ];

// const sortedArray = objs.sort((a, b) => a.age - b.age);
// console.log(sortedArray);

//------------------------------------------- Fibonacci searies

// function fibonacci(n) {
//   let first = 0;
//   let second = 1;
//   let next;
//   for (let index = 0; index < n; index++) {
//     if (index == 0) console.log(first);
//     if (index == 1) console.log(second);
//     if (index > 1) {
//       next = first + second;
//       console.log(next);
//       first = second;
//       second = next;
//     }
//   }
// }

// function fibonacci(num) {
//   let result = [];
//   for (let index = 0; index < num; index++) {
//     if (index === 0) result.push(0);
//     if (index === 1) result.push(1);
//     if (index > 1) {
//       result.push(result[index - 1] + result[index - 2]);
//     }
//   }
//   console.log(result);
// }

// console.log(fibonacci(10));

//------------------------------------------- Fibonacci searies another logic

// function fibonacci(n) {
//   let n1 = 0,
//     n2 = 1,
//     nextNumb;

//   console.log(n1);
//   console.log(n2);

//   for (let i = 2; i < n; i++) {
//     nextNumb = n1 + n2;
//     console.log(nextNumb);
//     n1 = n2;
//     n2 = nextNumb;
//   }
// }

// fibonacci(7);

//-------------------------------------------  Given a string, reverse each word in the sentence

// const sentence = "Welcome to this Javascript Guide!";

// function reverseWord(sen) {
//   let result = [];
//   let newOne = sen.split(" ");
//   newOne.forEach((word) => {
//     result.push(word.split("").reverse().join(""));
//   });
//   return result.join(" ");
// }

// function reverseWord(string) {
//   const newString = string
//     .split("")
//     .reverse()
//     .join("")
//     .split(" ")
//     .reverse()
//     .join(" ");
//   return newString;
// }

// console.log(reverseWord(sentence));

//------------------------------------------- How would you use a closure to create a private counter?

// function privateCounter() {
//   let Counter = 0;

//   return {
//     add: function increment(num) {
//       Counter = Counter + num;
//     },
//     minus: function decrement(num) {
//       Counter = Counter - num;
//     },
//     retrive: function retrive() {
//       return Counter;
//     },
//   };
// }

// let counterOne = privateCounter();
// counterOne.add(5);
// counterOne.add(5);
// counterOne.minus(2);
// console.log(counterOne.retrive());

// let counterTwo = privateCounter();
// counterTwo.add(3);
// console.log(counterTwo.retrive());

//------------------------------------------- find missing numbers

// const abc = [0, 1, 2, 3, 4, 5, 6, 7, 8];

// function findMissing(arr) {
//   for (let i = 0; i < arr.length - 1; i++) {
//     if (arr[i] + 1 !== arr[i + 1]) {
//       return arr[i] + 1;
//     }
//   }
//   return "All good";
// }

// console.log(findMissing(abc));

//------------------------------------------- Get names value in the array

// const dataArray = {
//   type: "b",
//   data: [
//     {
//       type: "a",
//       name: "name1",
//     },
//     {
//       type: "a",
//       data: [
//         {
//           type: "a",
//           data: [
//             {
//               type: "a",
//               name: "name5",
//             },
//             {
//               type: "s",
//               data: [
//                 {
//                   type: "a",
//                   data: [
//                     {
//                       type: "a",
//                       data: [
//                         {
//                           type: "a",
//                           name: "name5",
//                         },
//                         {
//                           type: "s",
//                           data: [
//                             {
//                               type: "a",
//                               name: "name6",
//                             },
//                             {
//                               type: "s",
//                               name: "name7",
//                             },
//                           ],
//                         },
//                       ],
//                     },
//                     {
//                       type: "s",
//                       data: [
//                         {
//                           type: "a",
//                           name: "name6",
//                         },
//                         {
//                           type: "s",
//                           data: [
//                             {
//                               type: "a",
//                               name: "name5",
//                             },
//                             {
//                               type: "s",
//                               data: [
//                                 {
//                                   type: "a",
//                                   name: "name6",
//                                 },
//                                 {
//                                   type: "s",
//                                   name: "name7",
//                                 },
//                               ],
//                             },
//                           ],
//                         },
//                       ],
//                     },
//                   ],
//                 },
//                 {
//                   type: "s",
//                   name: "name7",
//                 },
//               ],
//             },
//           ],
//         },
//         {
//           type: "s",
//           name: "name3",
//         },
//       ],
//     },
//     {
//       type: "a",
//       name: "name4",
//     },
//     {
//       type: "b",
//       data: [
//         {
//           type: "a",
//           name: "name5",
//         },
//         {
//           type: "s",
//           data: [
//             {
//               type: "a",
//               name: "name6",
//             },
//             {
//               type: "s",
//               name: "name7",
//             },
//           ],
//         },
//       ],
//     },
//   ],
// };

// function getAllNames(inputDatas) {
//   let result = [];

//   function getDate(theData) {
//     theData.forEach((element) => {
//       if ("name" in element) result.push(element?.name);
//       if ("data" in element) getDate(element?.data);
//     });
//   }

//   getDate(inputDatas.data);

//   return result;
// }
// const allNames = getAllNames(data);
// console.log(allNames);

// console.log(getAllNames(dataArray.data));

//------------------------------------------- Two sum

// const arrOfNums = [2, 3, 7, 11, 15];
// const target = 18;

// function findNumber(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length; j++) {
//       if (i !== j && arr[i] + arr[j] === target) return [i, j];
//     }
//   }
//   return "Had not found right solution";
// }

// console.log(findNumber(arrOfNums, target));

//------------------------------------------- Longest Substring Without Repeating Characters

// const inputString = "abcabcdeabcd";

// function findLongestSub(str) {
//   let result = [];
//   let subRes = [];

//   str.split("").forEach((alf, index) => {
//     if (subRes.includes(alf)) {
//       result.push([...subRes]);
//       subRes = [];
//       subRes.push(alf);
//     } else {
//       subRes.push(alf);
//       if (str?.length - 1 === index) result.push(subRes);
//     }
//   });

//   let max = [];
//   result.forEach((arr) => {
//     if (arr.length > max.length) max = arr;
//   });

//   console.log(max.join(""));
// }

// findLongestSub(inputString);

//------------------------------------------- Palindrome Check
// Ignore spaces, punctuation, and capitalization.

// const str1 = "321A m, .;##an, a plan, a canal, Pan,,ama 123";
// const str1 = "sachin";

// function checkPelidrom(str) {
//   let str2 = "";

//   str.split("").forEach((ele) => {
//     if (
//       (ele >= "a" && ele <= "z") ||
//       (ele >= "A" && ele <= "Z") ||
//       (ele >= "0" && ele <= "9")
//     )
//       str2 += ele;
//   });

//   if (str2.toLowerCase() === str2.split("").reverse().join("").toLowerCase()) {
//     return true;
//   }
//   return false;
// }

// console.log(checkPelidrom(str1));

//-------------------------------------------

// let input = [1, 31, [28, 7, [91], [13, 15, 8, [67, [102]]]]];
// let output = [1, 31, 28, 7, 91, 13, 15, 8, 67];

// console.log(input.flat(Infinity));

// function flatenArr(arr) {
//   let result = [];

//   function helper(arr1) {
//     for (let v of arr1) {
//       if (Array.isArray(v)) {
//         helper(v);
//       } else {
//         result = [...result, v];
//       }
//     }
//   }
//   helper(arr);

//   return result;
// }

// console.log(flatenArr(input));

// ----------------------------------------------------- live interview

// let input = [
//   { name: "sachin", roll: 123 },
//   { name: "rahul", roll: 456 },
//   { name: "rohan", roll: 789 },
// ];

// let output = { sachin: 123, rahul: 456, rohan: 789 };

// function helper(arr) {
//   let result = {};
//   arr.forEach((obj) => {
//     result = { ...result, [obj.name]: obj.roll };
//   });

//   return result;
// }

// console.log(helper(input));

// ----------------------------------------------------- live interview

// let a = [2, 3];

// let b = [a, [4, 5]];

// let c = [...b, [6, 7]];

// console.log(c);

// what will be log

// ----------------------------------------------------- group By Condition

// let mixedArray = [2, 3, 4, 5, 6, 7, 8, 9];

// function condition(e) {
//   return e % 2 === 0;
// }

// function groupByCondition(array, condition) {
//   return [
//     array.filter((ele) => condition(ele)),
//     array.filter((ele) => !condition(ele)),
//   ];
// }

// console.log(groupByCondition(mixedArray, condition));

// ----------------------------------------------------- Find second largest number in the array

// let arr = [20, 30, 40, 50, 6, 7, 8, 9];

// function secondLargest(arr) {
//   return arr.sort((a, b) => b - a)[1];
// }

// console.log(secondLargest(arr));

// ----------------------------------------------------- Find second largest number in the array

// let arr = [false, null, 0, "", undefined, NaN, true, "aa", 11];

// function removeFalsyValues(arr) {
//   return arr.filter((v) => Boolean(v));
// }

// function removeFalsyValues(arr) {
//   return arr.filter(Boolean);
// }

// console.log(removeFalsyValues(arr));

// ----------------------------------------------------- Find the index

// let arr = [20, 30, 40, 50, 6, 7, 8, 9];

// function findIndex(arr, e) {
//   return arr.indexOf(e);
// }

// console.log(findIndex(arr, 50));

// ---------------------------------------–––––––––------------ Implement a deep clone function in JavaScript that creates a copy of a nested object or array without any reference to the original.

// let obj = { name: "Sachin", sirName: "Patel" };
// let obj = ["sachin", 123, "Patel"];

// function deepClone(obj) {
//   return JSON.parse(JSON.stringify(obj));
// }

// console.log(deepClone(obj));

// ---------------------------------------–––––––––------------ Write a JavaScript program to find the largest element in a nested array.

// let arr = [
//   [1, 2, 3],
//   [5, 7, 3],
//   [15, 77, 13],
// ];

// function findLargestElement(nestedArray) {
//   let largest = nestedArray[0][0];

//   for (let arr of nestedArray) {
//     for (let num of arr) {
//       if (num > largest) {
//         largest = num;
//       }
//     }
//   }

//   return largest;
// }

// console.log(findLargestElement(arr));

// ---------------------------------------–––––––––------------ convert a string to title case

// let str = "hello my name is sachin";

// function toTitleCase(str) {
//   return str
//     .split(" ")
//     .map((st) => st.charAt(0).toUpperCase() + st.slice(1))
//     .join(" ");
// }

// console.log(toTitleCase(str));
