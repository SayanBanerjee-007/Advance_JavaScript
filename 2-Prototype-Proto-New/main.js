const user = {
  name: "Sayan",
  roll: 3,
  showUserDetails() {
    console.log(`Name: ${this.name}\nRoll: ${this.roll}`);
  },
};

user.showUserDetails();
console.log(user);
// const userTow = {};
const userTow = Object.create(user);
userTow.__proto__ = user;
Object.setPrototypeOf(userTow, user);
console.log(userTow);

console.log(v);
let l = 34;
var v = 23;
{
  var v = 4;
  let l = 123;
  const c = 13;
  {
    let l = 123;
    const c = 13;
  }
}
