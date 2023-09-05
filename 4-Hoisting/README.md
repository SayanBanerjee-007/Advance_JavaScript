# Hoisting

Hoisting in JavaScript refers to the behavior where variable and function declarations are moved to the top of their containing scope during the compilation/ memory creation phase before the code is executed.

### var, let & const all are hoisted in Javascript \*\*\*

For let and const, they can only be accessed after declaration in the code. If try to access them before declaration, it will give referenceError as they are not initialized and they are in **Temporal Dead Zone**(TDZ).

### referenceError VS syntaxError VS typeError

1. A **_ReferenceError_** occurs when you try to access a variable or function that is not defined or hasn't been declared in the current scope.
   Example:

   ```javascript
   console.log(x); // ReferenceError: x is not defined
   ```

2. A _**SyntaxError**_ occurs when there is a mistake in the syntax of your code, such as missing or misplaced parentheses, brackets, semicolons, or other syntax elements.

   Example:

   ```javascript
   const a; // SyntaxError: Missing initializer in const declaration
   a = 123;
   ```

3. A _**TypeError**_ occurs when you perform an operation on a value of a type that it's not compatible with, or when a value has a property or method that doesn't exist for that type.

   Example:

   ```javascript
   const b = 123;
   b = 999; // TypeError: Assignment to constant variable.
   ```

# Shadowing

when a variable that is already declared, is again declared inside block scope, that shadows the original variable. It's called shadowing in JavaScript.

```javascript
let a = 12;
{
  let a = 99; // Block Scope "a" shadows the Global "a".
  console.log(a);
}
```
