function pangrams(sentence) {
  // Write your code here
  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  let lowercaseSentence = sentence.toLowerCase();

  for (let i = 0; i < alphabet.length; i++) {
    if (!lowercaseSentence.includes(alphabet[i])) {
      return "not pangram";
    }
  }
  return "pangram";
}
