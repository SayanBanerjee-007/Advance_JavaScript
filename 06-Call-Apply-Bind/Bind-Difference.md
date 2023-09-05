# myBind Differ From myCall & myApply

### In myCall & myApply

```javascript
Function.prototype.myCall = function (context, ...args) {
  if (typeof this !== "function") {
    throw new TypeError("myCall can only be used on functions");
  }
  const uniqueId = Symbol();
  context[uniqueId] = this;
  const result = context[uniqueId](...args); // In case of call and also
  delete context[uniqueId]; // apply the function is called here and the
  return result; // returned value of original function is returned.
};
```

### In myBind

```javascript
Function.prototype.myBind = function (context, ...args) {
  if (typeof this !== "function") {
    throw new TypeError("myCall can only be used on functions");
  }
  const originalFunction = this;
  return function () {
    const uniqueId = Symbol();
    context[uniqueId] = originalFunction;
    context[uniqueId](...args);
    delete context[uniqueId];
  };
  // In myBind a function is returned with the closure of the myBind
  // function through which we can still access the original function,
  // context and the arguments. Then invoke the originalFunction as a
  // method of the context.
};
```

#### reason of this difference\*

Example:

```javascript
const obj = { name: "sayan" };
function showUser() {
  console.log(this.name);
}
obj.showUser = showUser;
obj.showUser(); // Output: sayan, as showUser is called as method
const showUserRef = obj.showUser;
showUserRef(); // Output: "", as showUserRef === showUser and not
// invoked as a method.
```

Run it browser, it's <span style="color: red">**IMPORTANT**</span>.
