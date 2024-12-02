# Getter, Setter, Private, Static

```js
class Animal {
  static count = 1
  #_name
  constructor(name) {
    this.name = name
  }
  get name() {
    return this.#_name
  }
  set name(name) {
    this.#_name = name
  }
  increaseCount() {
    Animal.count++
  }
}

const animalObj = new Animal('Bhutu')
console.log(animalObj.name)
animalObj.increaseCount()
console.log(Animal.count)
```
