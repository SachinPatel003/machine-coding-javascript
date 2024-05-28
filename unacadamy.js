// Different between map and forEach

// different between null and undefined
// null is value
// undefined means variable decleared but not initialized

// null == undefined;
// null === undefined;

// let a;
// console.log("a", a); // undefined
// console.log("b", b); // ReferenceError: b is not defined

// console.log(typeof null); // Object
// console.log(typeof undefined); // undefined

// Explain Event delegation
// document.querySelector("#product").addEventListener("click", (event) => {
//   if (event.target.tagName == "LI") {
//     window.location.href += "/" + event.target.innerText;
//   }
// });

// // Flattened the array
// const arr = [
//   [2, 3],
//   [4, 5],
//   [6, 7],
//   [8, 9],
// ];
// // const flatted = [].concat(...arr);
// const flatted = arr.flat(2);

// console.log("flatted", flatted);

// Round 2 questions

// Question: 1 different between let var const

// Question: 2 setTimeOut output based questoin / What will be out put

// function a() {
//   for (var i = 0; i < 3; i++) {
//     setTimeout(() => {
//       console.log(i);
//     }, i * 1000);
//   }
// }

// function a() {
//   for (let i = 0; i < 4; i++) {
//     setTimeout(() => {
//       console.log(i);
//     }, i * 1000);
//   }
// }

// function a() {
//   for (var i = 0; i < 3; i++) {
//     (function (i) {
//       setTimeout(() => {
//         console.log(i);
//       }, i * 1000);
//     })(i);
//   }
// }

// a();

// Question: 3 explain call apply and bind question

// Question: 4 explain infinite curring / same question as car 24

// Question: 5 compose and pipe in javascript

// Question: 6 Imlement Promise.all

// function showText(text, time) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(text);
//     }, time);
//   });
// }

// Promise.all([showText("the Text", 1000), Promise.resolve("hi")]).then(
//   (value) => {
//     console.log(value);
//   }
// );

// polyfill for promise.all

// function promiseAllPolyfill(promises) {
//   let result = [];

//   return new Promise((resolve, reject) => {
//     promises.forEach((p, index) => {
//       p.then((res) => {
//         result.push(res);
//         if (index === promises.length - 1) {
//           resolve(result);
//         }
//       }).catch((err) => reject(err));
//     });
//   });
// }

// promiseAllPolyfill([showText("the Text", 1000), Promise.resolve("pass")]).then(
//   (value) => console.log(value)
// );
