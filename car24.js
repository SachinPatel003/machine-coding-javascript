// ----------------------------------- Question 1

// function abc() {
//   //   console.log(a);
//   console.log(b);

//   //   let a = 10;
//   //   var a = 10;
// }
// abc();

// ----------------------------------- Implicit and explicit binding

// var obj = {
//   name: "sachin",
//   display: function () {
//     console.log(this.name);
//   },
// };

// var obj1 = {
//   name: "patel",
// };

// obj.display();
// obj.display.call(obj1);

// ----------------------------------- Memoize function

// function memoize(inputFn) {
//   const res = {};

//   return function (...args) {
//     var argsCache = args;

//     if (!res[argsCache]) {
//       console.log("res >>", res[argsCache]);
//       res[argsCache] = inputFn.call(_, ...args);
//     }
//     return res[argsCache];
//   };
// }

// const timeTakingFunction = (a, b) => {
//   for (let i = 0; i <= 1000000000; i++) {}
//   return a * b;
// };

// const usingMemoize = memoize(timeTakingFunction);

// console.time("first call");
// console.log(usingMemoize(5, 6));
// console.timeEnd("first call");

// console.time("second call");
// console.log(usingMemoize(5, 6));
// console.timeEnd("second call");

// console.time("third call");
// console.log(usingMemoize(10, 10));
// console.timeEnd("third call");

// ----------------------------------- Output based question

// console.log("a");
// setTimeout(() => console.log("setTime"), 0);
// Promise.resolve(() => console.log("Promise")).then((res) => res());
// console.log("b");

// ----------------------------------- curring

// function add(a) {
//   return function (b) {
//     return a + b;
//   };
// }

// console.log(add(5)(7));

// ----------------------------------- Infinite curring

// function add(a) {
//   return function (b) {
//     if (b) {
//       return add(a + b);
//     }
//     return a;
//   };
// }
// console.log(add(5)(7)(8)(4)());

// ----------------------------------- Implement this code

// const calc = {
//   total: 0,
//   add(num) {
//     this.total += num;
//     return this;
//   },
//   mult(num) {
//     this.total *= num;
//     return this;
//   },
//   sub(num) {
//     this.total -= num;
//     return this;
//   },
// };

// // given data

// const result = calc.add(5).mult(5).sub(2).add(2);

// console.log(result.total);
