function capitalize(s) {
  let arr = s.split("");
  arr[0] = arr[0].toUpperCase();
  return arr.join("");
}
console.log(capitalize("geia"));
module.exports = capitalize;
