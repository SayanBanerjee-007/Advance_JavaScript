// Creating own call, apply, bind ==========================

// call version = 1 ==========
// Function.prototype.myCall = function (context, ...args) {
//   if (typeof this !== "function") {
//     throw new TypeError("myCall can only be used on functions");
//   }
//   const uniqueId = Symbol();
//   context[uniqueId] = this;
//   const result = context[uniqueId](...args);
//   delete context[uniqueId];
//   return result;
// };

// call version = 2 ==========
Function.prototype.myCall = function (context, ...args) {
  let returnValue
  if (context == null || context == undefined) {
    return this()
  }
  if (typeof context == 'object') {
    const uniqueId = Symbol()
    context[uniqueId] = this
    returnValue = context[uniqueId](...args)
    delete context[uniqueId]
    return returnValue
  }
  context = new Object(context)
  const uniqueId = Symbol()
  context[uniqueId] = this
  returnValue = context[uniqueId](...args)
  delete context[uniqueId]
  return returnValue
}

function user1(name) {
  this.name = name
  function showUser1(a, b) {
    console.log(this.name, a, b, ' --> call')
  }
  showUser1.myCall(this, 'arg1', 'arg2') // Using my own call method
}
const userObj1 = new user1('Sayan')

// apply version = 1 ==========
// Function.prototype.myApply = function (context, argsArray) {
//   if (typeof this !== "function") {
//     throw new TypeError("myCall can only be used on functions");
//   }
//   const uniqueId = Symbol();
//   context[uniqueId] = this;
//   const result = context[uniqueId](argsArray);
//   delete context[uniqueId];
//   return result;
// };

// apply version = 2 ==========
Function.prototype.myApply = function (context, args) {
  let returnValue
  if (context == null || context == undefined) {
    return this()
  }
  if (typeof context == 'object') {
    const uniqueId = Symbol()
    context[uniqueId] = this
    returnValue = context[uniqueId](args)
    delete context[uniqueId]
    return returnValue
  }
  context = new Object(context)
  const uniqueId = Symbol()
  context[uniqueId] = this
  returnValue = context[uniqueId](args)
  delete context[uniqueId]
  return returnValue
}

function user2(name) {
  this.name = name
  function showUser2([a, b]) {
    console.log(this.name, a, b, ' --> apply')
  }
  showUser2.myCall(this, ['arg1', 'arg2']) // Using my own call method
}
const userObj2 = new user2('Sayan')

// Bind version = 1 =====================
// Function.prototype.myBind = function (context, ...args) {
//   if (typeof this !== 'function') {
//     throw new TypeError('myCall can only be used on functions')
//   }
//   const originalFunction = this
//   return function () {
//     const uniqueId = Symbol()
//     context[uniqueId] = originalFunction
//     context[uniqueId](...args)
//     delete context[uniqueId]
//   }
// }

// Bind version = 2 =====================
Function.prototype.myBind = function (context, ...args) {
  return (...newArgs) => {
    let returnValue
    if (context == null || context == undefined) {
      return this()
    }
    if (typeof context == 'object') {
      const uniqueId = Symbol()
      context[uniqueId] = this
      returnValue = context[uniqueId](...[...args, ...newArgs])
      delete context[uniqueId]
      return returnValue
    }
    context = new Object(context)
    const uniqueId = Symbol()
    context[uniqueId] = this
    returnValue = context[uniqueId](...[...args, ...newArgs])
    delete context[uniqueId]
    return returnValue
  }
}

const userObj3 = {
  name: 'Sayan',
}
function showUser3(a, b) {
  console.log(this.name, a, b, ' --> bind')
}
const showUser3Bound = showUser3.myBind(userObj2, 'arg1', 'arg2')
showUser3Bound()
