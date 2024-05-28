// ----------------------------------------- Function Curring / and you can give this example in closure

// function fun(a) {
//   return function (b) {
//     return function (c) {
//       return a + b + c;
//     };
//   };
// }

// let aaa = fun(1)(2);

// console.log(aaa(3));

// ----------------------------------------- Advance Curring

// function fun(a) {
//   return function (b) {
//     if (b) return fun(a + b);
//     return a;
//   };
// }

// console.log(fun(1)(2)(3)(4)(6)(7)(8)());

// ---------------------------------- throttling/debounceing by lodash library

// let countValue = 0;

// const inp = document.querySelector(".inp");
// const trigger = document.querySelector(".trigger");

// // const triggerFun = _.throttle(() => {
// const triggerFun = _.debounce(() => {
//   trigger.innerHTML = ++countValue;
// }, 800);

// inp.addEventListener("keydown", () => {
//   triggerFun();
// });

// ---------------------------------- Polifill debounceing

// const inputElement = document.querySelector(".inp");

// function debounce(delay) {
//   let timer;
//   return function () {
//     clearTimeout(timer);
//     timer = setTimeout(() => {
//       console.log("call");
//     }, delay);
//   };
// }

// inputElement.addEventListener("keydown", debounce(1000));

// ---------------------------------- Polifill throttling

// const inputElement = document.querySelector(".inp");

// function throttle(delay) {
//   let last = 0;
//   return function () {
//     let now = new Date().getTime();
//     if (now - last < delay) return;
//     last = now;
//     console.log("throttle");
//   };
// }

// inputElement.addEventListener("keydown", throttle(400));

// ---------------------------------- Callback / Callback hell

// api(function (result) {
//   api2(result, function (result2) {
//     api3(result2, function (result3) {
//       api4();
//     });
//   });
// });

// ---------------------------------- Promise

// example with api calling

// let myPromise = new Promise(function (Resolve, Reject) {
//   let req = new XMLHttpRequest();
//   req.open("GET", "https://jsonplaceholder.typicode.com/todos/2");
//   req.onload = function () {
//     if (req.status == 200) {
//       Resolve(req.response);
//     } else {
//       Reject("File not Found");
//     }
//   };
//   req.send();
// });

// myPromise.then(
//   function (value) {
//     console.log(1);
//     console.log(value);
//   },
//   function (error) {
//     console.log(2);
//     console.log(error);
//   }
// );

// // example with simple variable

// let myPromise = new Promise((myResolve, myReject) => {
//   let x = 0;
//   if (x === 0) {
//     myResolve("resolved");
//   } else {
//     myReject("rejected");
//   }
// });

// myPromise.then((r) => console.log(r)).catch((e) => console.log(e));

// myPromise.then(
//   (r) => console.log(r),
//   (e) => console.log(e)
// );

// ---------------------------------- Promise chain

// api()
//   .then((result) => api2(result))
//   .then((result1) => api2(result1))
//   .then((result2) => api2(result2))
//   .catch((error) => console.log(error));

// ---------------------------------- Fetch

// let fetchRes = fetch("https://jsonplaceholder.typicode.com/todos/1");

// fetchRes is inmutable so we can't change this data only use it

// fetchRes.then((res) => res.json()).then((d) => console.log(d));

// ---------------------------------- .then() .catch()

// fetchRes
//   .then((data) => data.json())
//   .then((e) => console.log(e))
//   .catch((error) => console.error("Rejected:", error));

// ---------------------------------- Async/Await

// async function fetchData() {
//   try {
//     const data = await myPromise;
//     console.log("Resolved:", data);
//   } catch (error) {
//     console.error("Rejected:", error);
//   }
// }

// fetchData();

// ---------------------------------- Parallel Requests

// const req1 = fetch("https://jsonplaceholder.typicode.com/todos/1");
// const req2 = fetch("https://jsonplaceholder.typicode.com/todos/2");
// const req3 = fetch("https://jsonplaceholder.typicode.com/todos/3");
// const req4 = fetch("https://jsonplaceholder.typicode.com/todos/4");

// Promise.all([req1, req2, req3, req4])
//   .then((res) => {
//     const data1 = res[0].json();
//     const data2 = res[1].json();
//     const data3 = res[2].json();
//     const data4 = res[3].json();
//     Promise.all([data1, data2, data3, data4])
//       .then((res2) => {
//         console.log(res2);
//       })
//       .catch((err) => console.log("err2", err));
//   })
//   .catch((err) => console.log("err1", err));

// ---------------------------------- Sequential Requests

// const fetchSequentially = async () => {
//   try {
//     const res1 = await fetch("https://jsonplaceholder.typicode.com/todos/1");
//     const data1 = await res1.json();
//     console.log(data1);

//     const res2 = await fetch("https://jsonplaceholder.typicode.com/todos/2");
//     const data2 = await res2.json();
//     console.log(data2);

//     const res3 = await fetch("https://jsonplaceholder.typicode.com/todos/3");
//     const data3 = await res3.json();

//     console.log(data3);
//   } catch (error) {
//     console.log(error);
//   }
// };

// fetchSequentially();
