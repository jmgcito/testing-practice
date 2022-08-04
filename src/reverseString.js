function reverseString(str) {
  //doing this the old fashioned O(n) way
  let reverse = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reverse += str[i];
  }
  return reverse;
}

module.exports = reverseString;
