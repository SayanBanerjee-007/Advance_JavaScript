// Run each individually and read the .md file and see output in browser console

// ===============================================

// function outer(val) {
//   function middle() {
//     function inner() {
//       console.log("Inner called and val = ", val);
//     }
//     return inner;
//   }
//   return middle();
// }
// outer(12)();

// ===============================================

// for (var i = 1; i <= 5; i++) {
//   function call(i) {
//     setTimeout(() => {
//       console.log(i);
//     }, 1000 * i);
//   }
//   call(i);
// }

// ===============================================

// for (var i = 1; i <= 5; i++) {
//   function call() {
//     console.log(call.i);
//   }
//   call.i = i;
//   setTimeout(call, 1000 * i);
// }

// ===============================================

// function counter() {
//   let count = 0;
//   return function () {
//     console.log(count);
//     return count++;
//   };
// }
// const firstCounter = counter();
// firstCounter();
// firstCounter();
// const secondCounter = counter();
// secondCounter();
// secondCounter();
// secondCounter();

// ===============================================

// function counter() {
//   let count = 0;
//   return {
//     value() {
//       console.log(count);
//       return count;
//     },
//     increment() {
//       console.log(++count);
//       return count;
//     },
//     decrement() {
//       console.log(--count);
//       return count;
//     },
//   };
// }
// const firstCounter = counter();
// firstCounter.increment();
// firstCounter.increment();
// firstCounter.increment();
// firstCounter.decrement();
// firstCounter.decrement();
// firstCounter.value();

// ===============================================

// function counter() {
//   let count = 0;
//   this.increment = function () {
//     console.log(++count);
//     return count;
//   };
//   this.decrement = function () {
//     console.log(--count);
//     return count;
//   };
// }
// const firstCounter = new counter();
// console.log(firstCounter);
// firstCounter.increment();

// ===============================================

// function counter() {
//   let count = 0;
// }
// counter.prototype.increment = function () {
//   console.log(++count);
//   return count;
// };
// counter.prototype.decrement = function () {
//   console.log(++count);
//   return count;
// };
// const firstCounter = new counter();
// console.log(firstCounter);
// firstCounter.increment();

// ===============================================

// function a(params) {
//   let x = 123,
//     y = 123140000;
//   return function b(params) {
//     console.log(x);
//   };
// }
// let lol = a();
// lol();
