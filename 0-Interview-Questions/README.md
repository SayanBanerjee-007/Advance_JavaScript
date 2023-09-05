# Questions

1. Loop through an object and print all the properties and its value. Properties may not enumerable.

**Solution:**

```javascript
const user = {
  name: "foo",
  age: 36,
  email: "foo@example.com",
};
Object.defineProperty(user, "name", { enumerable: false });
// This will not print name
for (let [key, value] of Object.entries(user)) {
  console.log(key, value);
}
// This will print name
const userProperties = Object.getOwnPropertyNames(user);
for (let val of userProperties) {
  console.log(val, user[val]);
}
```
