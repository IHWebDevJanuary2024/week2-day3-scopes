# Scopes, values and references

In this class we've learned about the following concepts:

## Scopes
Where in code you have access to a variable or function. There are two kinds of scopes:
- Global scope: variables and functions that are accessible everywhere in your code.
- Local scope: variables and functions that are only accessible in the current scope.
Also, when using functions we can call it `function scope`.

## Values
The information that is stored in a variable. There are different kinds of values:
- Primitive values: string, number, boolean, null, undefined, symbol.
- Non-primitive values: object, array, function.

Remember primitive values are not mutable, but non-primitive values are mutable.
When we change the value of a variable that contains a primitive value, we are creating a new value in memory.
When we change a non-primitive value (for example `array.push()`), we are modifying the value in memory.

## References
A reference is a value that points to another value in memory. When we assign a non-primitive value to a variable, we are actually assigning a reference to that value in memory.

```javascript
const myArray = [1, 2, 3];
const anotherArray = myArray;
anotherArray.push(4);
console.log(myArray); // [1, 2, 3, 4]
```

## Hoisting
Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their scope before code execution. Remeber the metaphor of the student that reads the documentation before applying the code to the app.

## Shadowing
Shadowing is when a variable in a local scope has the same name as a variable in the global scope. The local variable will take precedence over the global variable.

```javascript
const myVar = 'global';

function myFunction() {
  const myVar = 'local';
  console.log(myVar); // local
}

myFunction();
console.log(myVar); // global
```
