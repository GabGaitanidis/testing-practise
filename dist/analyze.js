function analyze(arr) {
  const obj = {};
  let min = arr[0];
  let max = arr[0];
  let sum = 0;
  arr.forEach((n) => {
    if (n < min) {
      min = n;
    }
    if (n > max) {
      max = n;
    }
    sum = sum + n;
  });
  obj.min = min;
  obj.length = arr.length;
  obj.max = max;
  obj.Average = sum / arr.length;
  return obj;
}
module.exports = analyze;
