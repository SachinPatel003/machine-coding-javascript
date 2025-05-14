// function foo() {
//     var name = 'Roadside Coder'; // name is a local variable created by foo
//     function displayName() {
//       console.log(name); // variable used which is declared in the parent function
//     }
//     displayName();
//   }
//   foo();

// --------------------------------------------------

// let count = 0;
// (function immediate() {
//   if (count === 0) {
//     let count = 1;
//     console.log(count); // Output ?
//   }
//   console.log(count); // Output?
// })();

// --------------------------------------------------

// function createBase(baseNumber) {
//   return function (N) {
//     // we are referencing baseNumber here even though it was declared
//     // outside of this function. Closures allow us to do this in JavaScript
//     return baseNumber + N;
//   };
// }

// var addSix = createBase(6);
// console.log(addSix(10));
// console.log(addSix(21));

// --------------------------------------------------  Problem

// function find(index) {
//   let a = [];
//   for (let i = 0; i < 1000000; i++) {
//     a[i] = i * i;
//   }

//   console.log(a[index]);
// }

// console.time("6");
// find(6); // this takes 37ms
// console.timeEnd("6");
// console.time("12");
// find(12); // this takes 135ms
// console.timeEnd("12");

// -------------------------------------------------- Solution by closure

// function find() {
//   let a = [];
//   for (let i = 0; i < 1000000; i++) {
//     a[i] = i * i;
//   }

//   return function (index) {
//     console.log(a[index]);
//   };
// }

// const closure = find();
// console.time("6");
// closure(6); // this takes 0.25 ms
// console.timeEnd("6");
// console.time("12");
// closure(12); // this takes 0.025ms
// console.timeEnd("12");

// -------------------------------------------------- Output?

// for (var i = 0; i < 3; i++) {
//   setTimeout(function log() {
//     console.log(i); // What is logged?
//   }, 1000);
// }

// -------------------------------------------------- Output?
// Use let if you want output  ---> 1 2 3

// for (let i = 0; i < 3; i++) {
//   setTimeout(function log() {
//     console.log(i); // What is logged?
//   }, 1000);
// }

// --------------------------------------------------

// Without use let you can get ouput 1 2 3 by using function scope feature of var

// for (var i = 0; i < 3; i++) {
    
//   function abc(i) {
//     setTimeout(function log() {
//       console.log(i); // What is logged?
//     }, 1000);
//   }

//   abc(i);
// }

// -------------------------------------------------- 
// what is module pattern in javascript?

// const Module = (function() {
//     // Private variables and functions, only accessible within the module
//     let privateVariable = "I'm private";
//     function privateMethod() {
//         console.log(privateVariable);
//     }

//     // Public interface, returned by the module
//     return {
//         publicMethod: function() {
//             console.log("I'm public");
//             privateMethod(); // Accessing private method from public method
//         },
//         publicVariable: "I'm also public"
//     };
// })();

// Module.publicMethod(); // Output: I'm public, I'm private
// console.log(Module.publicVariable); // Output: I'm also public
// //console.log(Module.privateVariable); // Error: undefined (private variable is not accessible)


// -------------------------------------------------- 

// Question?

// Rewrite the function in such a way the output gets printed once even though the function is called multiple times.

// let view
// function likeTheVideo(){
//     view="Roadside Coder"
//     console.log( "Subscribe to", view)
// }

// likeTheVideo(); // Subscribe to Roadside Coder
// likeTheVideo(); // Subscribe to Roadside Coder
// likeTheVideo(); // Subscribe to Roadside Coder
// likeTheVideo(); // Subscribe to Roadside Coder

// Answer

// let view;
// function likeTheVideo(){
//     let called = 0;

//     return function(){
//         if(called>0){
//             console.log("Already Subscribed");
//         }
//         else{
//             view="Roadside Coder"
//             called++;
//             console.log( "Subscribe to", view)
//         }
//     }
// }

// let isSubscribe = likeTheVideo()

// isSubscribe() // Subscribe to Roadside Coder
// isSubscribe() // Already Subscribed

// -------------------------------------------------- 


