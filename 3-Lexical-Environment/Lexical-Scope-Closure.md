# Lexical Environment

## Definition:

It's the local memory with the reference to lexical environment of its parents scope.

## Example

```javascript
// When the lower function don't find the variable "a", inside local scope/execution context,
// JS Engine try to find it inside its parent lexical environment until the parent
// lexical environment reference is null.
let a = 123;
function higher() {
  let a = 10101;
  function lower() {
    console.log(a);
  }
  lower();
}
higher();
```

# Scope Chain

## Definition

It's the chain of lexical environments from the last function to enter the call stack to the first function to enter the call stack (which is Global Execution Context).
