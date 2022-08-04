function caesarCipher(str, shift) {
  let encodedStr = "";

  for (let i = 0; i < str.length; i++) {
    let currCode = str.charCodeAt(i);

    //checks if code is within alphabetic range
    if (
      (65 <= currCode && currCode <= 90) ||
      (97 <= currCode && currCode <= 122)
    ) {
      // for loop depends on the number of shifts to ensure charCodes do not spill
      // out of range
      for (let j = 0; j < shift; j++) {
        currCode += 1;

        //if code leaves range, resets it to start of alphabet
        if ((90 < currCode && currCode < 97) || 122 < currCode) {
          currCode -= 26;
        }
      }
    }
    encodedStr += String.fromCharCode(currCode);
  }
  return encodedStr;
}

module.exports = caesarCipher;
