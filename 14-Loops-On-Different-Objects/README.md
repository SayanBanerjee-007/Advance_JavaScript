# Loops in Array vs Objects vs Strings vs Maps vs Sets

```js
// Loops in Array vs Objects vs Strings vs Maps vs Sets

console.log('Loops in Array vs Objects vs Strings vs Maps vs Sets')

console.log(
  '\n================================================================\n'
)
// Array
const arr = [1, 2, 3, 4, 5]
console.log('Array -> ', arr)
console.log('for in -> prints index')
for (let index in arr) console.log(index)
console.log('for of -> prints value')
for (let value of arr) console.log(value)
console.log('for of -> using arr.entries')
for (let [index, value] of arr.entries()) console.log(index, value)
console.log('forEach -> prints value, index, array')
arr.forEach((value, index, arr) => console.log(value, index, arr))
console.log(
  '\n================================================================\n'
)

// Object
const obj = { a: 1, b: 2, c: 3, d: 4, e: 5 }
console.log('Object -> ', obj)
console.log('for in -> prints key')
for (let key in obj) console.log(key)
console.log('for of -> not iterable')
try {
  for (let value of obj) console.log(value) // Error: obj is not iterable
} catch (error) {
  console.log(error)
}
console.log('for of -> using Object.entries')
for (let [key, value] of Object.entries(obj)) console.log(key, value)
console.log('for of -> using Object.keys')
for (let key of Object.keys(obj)) console.log(key)
console.log('for of -> using Object.values')
for (let value of Object.values(obj)) console.log(value)
console.log('forEach -> not iterable')
try {
  obj.forEach((value, key, obj) => console.log(value, key, obj)) // Error: obj.forEach is not a function
} catch (error) {
  console.log(error)
}
console.log('forEach -> using Array.from')
console.log(
  Array.from(Object.entries(obj), ([key, value]) => ({
    [key]: value,
  }))
)
console.log(
  '\n================================================================\n'
)

// String
const str = 'hello'
console.log('String -> ', str)
console.log('for in -> prints index')
for (let index in str) console.log(index)
console.log('for of -> prints value')
for (let value of str) console.log(value)
console.log('for of -> using str.entries')
for (let [index, value] of Object.entries(str))
  console.log(index, value)
console.log('forEach -> not iterable')
try {
  str.forEach((value, index, str) => console.log(value, index, str)) // Error: str.forEach is not a function
} catch (error) {
  console.log(error)
}
console.log('forEach -> using Array.from')
console.log(Array.from(str, (value, index) => ({ [index]: value })))
console.log(
  '\n================================================================\n'
)

// Map ->
const map = new Map([
  ['a', 1],
  ['b', 2],
  ['c', 3],
  ['d', 4],
  ['e', 5],
])
console.log('Map -> ', map)
console.log('for in -> not iterable')
try {
  for (let key in map) console.log(key) // Error: map is not iterable
} catch (error) {
  console.log(error)
}
console.log('for of -> prints [key, value]')
for (let data of map) console.log(data)
console.log('for of -> prints key, value')
for (let [key, value] of map) console.log(key, value)
console.log('for of -> using map.entries')
for (let [key, value] of map.entries()) console.log(key, value)
console.log('for of -> using map.keys')
for (let key of map.keys()) console.log(key)
console.log('for of -> using map.values')
for (let value of map.values()) console.log(value)
console.log('forEach -> prints value, key, map')
map.forEach((value, key, map) => console.log(value, key, map))
console.log('forEach -> using Array.from')
console.log(Array.from(map, ([key, value]) => ({ [key]: value })))
console.log(
  '\n================================================================\n'
)

// Set
const set = new Set([1, 2, 3, 4, 5])
console.log('Set -> ', set)
console.log('for in -> not iterable')
try {
  for (let key in set) console.log(key) // Error: set is not iterable
} catch (error) {
  console.log(error)
}
console.log('for of -> prints value')
for (let value of set) console.log(value)
console.log('for of -> using set.entries')
for (let [key, value] of set.entries()) console.log(key, value)
console.log('for of -> using set.keys')
for (let key of set.keys()) console.log(key)
console.log('for of -> using set.values')
for (let value of set.values()) console.log(value)
console.log('forEach -> prints value, key, set')
set.forEach((value, key, set) => console.log(value, key, set))
console.log(
  '\n================================================================\n'
)

// Conclusion:
// 1. Array -> for in prints index, for of prints value
// 2. Object -> for in prints key, for of prints value using Object.entries
// 3. String -> for in prints index, for of prints value
// 4. Map -> for of prints [key, value] using map.entries
// 5. Set -> for of prints value
// 6. forEach -> prints value, key, array/map/set
// 7. forEach -> using Array.from
// 8. for of -> using Object.entries, Object.keys, Object.values, map.entries, map.keys, map.values
// 9. for in -> not iterable for Object, Map, Set
// 10. for of -> not iterable for Object
// 11. for of -> not iterable for Set
// 12. for of -> not iterable for Map
// 13. forEach -> not iterable for String, Set
// 14. forEach -> not iterable for Object, Map
// 15. forEach -> using Array.from for String, Map
// 16. forEach -> using Array.from for Object, Set
// 17. forEach -> prints value, key, array/map/set
// 18. forEach -> using Array.from
```
