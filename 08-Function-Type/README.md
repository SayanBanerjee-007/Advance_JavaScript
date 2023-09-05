# Function Type

1. Function Statement & Function Declaration

```javascript
function xyz() {
  console.log("Hello World!!!");
}
```

2. Function Expression

```javascript
const xyz = function () {
  console.log("Hello World!!!");
};
const xyzArrow = () => {
  console.log("Hello World!!!");
};
```

3. Anonymous Function - A Function with no name

```javascript
setTimeOut(function () {
  console.log("Hello World!!!");
}, 1000);
setTimeOut(() => {
  console.log("Hello World!!!");
}, 1000);
```

4. Named Function Expression

```javascript
const xyz = function named() {
  console.log("Hello World!!!");
};
```

5. First Class Function & First Class Citizen

```txt
Functions can be assigned to variables.
Functions can be passed as arguments to other functions.
Functions can be returned as values from other functions.
Functions can be stored in data structures like arrays or objects.
Functions can be created dynamically (e.g., as function expressions).
Functions maintain their lexical scope, even when passed as arguments or returned from other functions.
```

6. Pure Function - A Function that produce same result for the same input and don't change the actual value.

```javascript
function add(a, b) {
  return a + b;
}
const result1 = add(2, 3); //5
const result2 = add(2, 3); //5

// This is not pure Function for due to Math.random()
function multiply(a) {
  return a * Math.floor(Math.random() * 10);
}
const result3 = multiply(2); // 4 or something else
const result4 = multiply(2); // 8 or something else
```

7. Arguments vs Parameters

```javascript
function add(a, b) {
  // 'a' and 'b' are parameters
  return a + b;
}

const result = add(2, 3); // 2 and 3 are arguments
```

8. Arrow Function

```javascript
// For arrow function "this" refer to its parent's "this"
// this is inherited from its parents
const arrowFun = (val) => console.log(val);
```
