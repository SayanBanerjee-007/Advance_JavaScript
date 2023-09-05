const input = document.getElementById("input");
const normal = document.getElementById("default-text");
const debounceText = document.getElementById("debounce-text");
const throttleText = document.getElementById("throttle-text");

// Debounce =================================
// My ----------------
let debounceTimer = null;
function myDebounce(text, delay = 1000) {
  clearTimeout(debounceTimer);
  debounceTimer = setTimeout(() => {
    debounceText.innerText = text;
  }, delay);
}
// WDS ----------------
function wdsDebounce(cb, delay = 1000) {
  let timer = null;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      cb(...args);
    }, delay);
  };
}
const updateDebounceText = wdsDebounce(function (text) {
  debounceText.textContent = text;
});

// Throttle =================================
// My ----------------
let throttleTimer = null;
function myThrottle() {
  if (throttleTimer === null) {
    throttleText.innerText = input.value;
    throttleTimer = setInterval(() => {
      throttleText.innerText = input.value;
      clearInterval(throttleTimer);
      throttleTimer = null;
    }, 1000);
  }
}
// WDS ----------------
function wdsThrottle(cb, delay = 1000) {
  let shouldWait = false;
  let waitingArgs = null;
  const timeOutFunction = () => {
    if (waitingArgs === null) {
      shouldWait = false;
    } else {
      cb(...waitingArgs);
      waitingArgs = null;
      setTimeout(timeOutFunction, delay);
    }
  };
  return function (...args) {
    if (shouldWait) {
      waitingArgs = args;
      return;
    }
    cb(...args);
    shouldWait = true;
    setTimeout(timeOutFunction, delay);
  };
}
const updateThrottleText = wdsThrottle((text) => {
  throttleText.textContent = text;
});
// My WDS update --------------------------------
function wdsUpdateThrottle(cb, delay = 1000) {
  let timer = null;
  let higherArgs = null;
  return function (...args) {
    higherArgs = args;
    if (timer === null) {
      cb(...higherArgs);
      timer = setInterval(() => {
        cb(...higherArgs);
        clearInterval(timer);
        timer = null;
      }, delay);
    }
  };
}
const updateThrottleText2 = wdsUpdateThrottle(function (text) {
  throttleText.textContent = text;
});

// Event Listeners =================================================================

input.addEventListener("input", (event) => {
  normal.innerText = event.target.value;
  //   myDebounce(event.target.value);
  updateDebounceText(event.target.value);
  // myThrottle();
  // updateThrottleText(event.target.value);
  updateThrottleText2(event.target.value);
});
