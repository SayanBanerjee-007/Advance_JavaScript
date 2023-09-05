function higher() {
  var a = 10000;
  function lower() {
    console.log(a);
  }
  return lower;
}
lowerFunc();
