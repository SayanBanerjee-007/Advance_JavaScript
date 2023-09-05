# The "this" keyword in JavaScript

## FOR BROWSER

1.  Globally or inside any Regular Function or inside any Arrow Function or inside any Arrow Function Method, "this" keyword refer to the Global Object which is "WINDOW". But for the Regular Function Method, "this" keyword refer to the Object of that Method itself.

2.  For any Regular Function declared inside any other Higher Order (Arrow or Regular) / (Function or Method), "this" keyword refer to the Global Object which is "WINDOW". But for Arrow Function declared inside any other Higher Order (Arrow or Regular) / (Function or Method), "this" keyword refer to the "this" of its Higher Order (Arrow or Regular) / (Function or Method), if "use strict" is not declared inside its Higher Order (Arrow or Regular) / (Function or Method) it will cause "this" value to be "undefined".

    ### Note

    For any Regular Function declared inside any other Higher Order (Arrow or Regular) / (Function or Method), to access the "this" of its Higher Order (Arrow or Regular) / (Function or Method), you have to use "call()" Method which is available on every single Function, while invoking the Regular Function inside the (Arrow or Regular) / (Function or Method).

    Example

    ```javascript
    Array.prototype.myMethod = function () {
      function child() {
        // only applicable for Regular Function as Arrow Function directly give
        // access to the "this" of its (Arrow or Regular) / (Function or Method).
        console.log(this);
      }
      child.call(this);
    };
    const arr = [1, 2];
    arr.myMethod(); // Run on browser and verify.
    ```

    Extra

    ```
    // child.call("< Any value except this>")
    // value of "this" inside child Function will be "Number{2}" which is not primitive value but Object of the Number instance.
    ```

## FOR NODE JS ENVIRONMENT

1. Globally or inside any Arrow Function or Arrow Function Method, "this" keyword refer to an Empty Object or {} or [object Object].

2. inside any Regular Function or Regular Function Method, "this" keyword refer to the [object global]

   ### Note

   "call" and "use strict" work same here.
