//  UNDERSTANDING THIS VALUE GLOBALLY IN NODE JS -----------

// "[object Object]" is same as "{}.toString()"

// console.log(`\nexports: ${exports} --> `, exports);
// console.log(`module.exports: ${module.exports} --> `, module.exports);
// console.log(`this: ${this} --> `, this, "\n");

// console.log("module.exports === exports -->", module.exports === exports);
// console.log("module.exports === this -->", module.exports === this);
// console.log("exports === exports -->", exports === this);

// USING Promise -------------------------------------------

// const response = new Promise((resolve, reject) => {
//   setTimeout(() => {
//   resolve("Task completed");
//   reject("reject");
//   }, 100000);
// });
// console.log(response);
// response
//   .then((res) => {
//     console.log(response);
//   })
//   .catch((err) => {
//     console.log("ERROR:", err);
//   })
//   .finally(() => {
//     console.log("I am finally");
//   });

// CREATING My Own Promise ================================

function MyPromise(callback) {
  this.state = "< Pending >";
  this.reason = null;
  this.response = null;

  function resolve(response = "") {
    if (this.reason === null) {
      this.state = "< fulfilled >";
      this.response = response;
    }
  }
  function reject(reason = "") {
    if (this.response === null) {
      this.state = "< rejected >";
      this.reason = reason;
    }
  }
  callback.call(this, resolve.bind(this), reject.bind(this));
}
// then prototype ------------
MyPromise.prototype.then = function (callback) {
  if (this.response) {
    callback(this.response);
  } else {
    const getResponse = setInterval(() => {
      if (this.response) {
        callback(this.response);
        clearInterval(getResponse);
        clearTimeout(checkResponse);
      }
      if (this.reason) {
        clearInterval(getResponse);
        clearTimeout(checkResponse);
      }
    }, 100);
    const checkResponse = setTimeout(() => {
      if (!this.response) {
        clearInterval(getResponse);
        throw "Time expired for resolve() to execute.";
      }
    }, 1000 * 60);
  }
  return this;
};
// catch prototype ------------
MyPromise.prototype.catch = function (callback) {
  if (this.reason) {
    callback(this.reason);
  } else {
    const getReason = setInterval(() => {
      if (this.reason) {
        callback(this.reason);
        clearInterval(getReason);
        clearTimeout(checkReason);
      }
      if (this.response) {
        clearInterval(getReason);
        clearTimeout(checkReason);
      }
    }, 100);
    const checkReason = setTimeout(() => {
      if (!this.response) {
        clearInterval(getReason);
        throw "Time expired for reject() to execute.";
      }
    }, 1000 * 60);
  }
  return this;
};
// finally prototype ------------
MyPromise.prototype.finally = function (callback) {
  const checkPromiseComplete = setInterval(
    function () {
      if (this.reason || this.response) {
        callback();
        clearTimeout(checkPromiseComplete);
        clearTimeout(noResponseTime);
      }
    }.bind(this),
    100
  );
  const noResponseTime = setTimeout(
    function () {
      clearTimeout(checkPromiseComplete);
    }.bind(this),
    1000 * 60
  );
  return null;
};

// USING My Own Promise ===================================

// Note****
// If .then , .catch , .finally is called without resolve or reject being invoked inside the callback of MyPromise, the programme will stuck there for 1000 * 60 seconds and "throw an Error"

const myPromiseObj = new MyPromise(function (resolve, reject) {
  setTimeout(() => {
    resolve("Task is completed.");
    reject("reject");
  }, 2000);
});
myPromiseObj
  .then(function (res) {
    console.log(res);
  })
  .catch(function (err) {
    console.log("ERROR: ", err);
  })
  .finally(function () {
    console.log("Promise execution is completed");
  });
