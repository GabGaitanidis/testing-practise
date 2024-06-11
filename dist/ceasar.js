function ceasar(s, n) {
  const nonAlphabeticalRegex = /[^a-zA-Z]/;
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const alphabetUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  const nextThreeLetters = [];

  s.split("").forEach((s) => {
    if (!nonAlphabeticalRegex.test(s)) {
      if (s == s.toLowerCase()) {
        const startIndex = alphabet.indexOf(s);
        if (s == "x") {
          nextThreeLetters.push("a");
        } else if (s == "y") {
          nextThreeLetters.push("b");
        } else if (s == "z") {
          nextThreeLetters.push("c");
        } else {
          if (startIndex === -1) {
            throw new Error("Input is not a valid letter");
          }
          nextThreeLetters.push(alphabet[startIndex + n]);
        }
      } else {
        const startIndex = alphabetUpper.indexOf(s);
        if (s == "X") {
          nextThreeLetters.push("A");
        } else if (s == "Y") {
          nextThreeLetters.push("B");
        } else if (s == "Z") {
          nextThreeLetters.push("C");
        } else {
          if (startIndex === -1) {
            throw new Error("Input is not a valid letter");
          }
          nextThreeLetters.push(alphabetUpper[startIndex + n]);
        }
      }
    } else {
      nextThreeLetters.push(s);
    }
  });

  return nextThreeLetters.join("");
}

module.exports = ceasar;
