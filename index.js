function reverseWords(sentence) {
  // Split the sentence into words
  const words = sentence.split(' ');

  // Initialize an empty array to store the reversed words
  const reversedWords = [];

  // Loop through each word in the sentence
  for (let word of words) {
    // Initialize an empty string to store the reversed word
    let reversedWord = '';

    // Loop through the characters in the word in reverse order
    for (let i = word.length - 1; i >= 0; i--) {
      reversedWord += word[i]; // Add each character to the reversed word
    }

    // Add the reversed word to the array of reversed words
    reversedWords.push(reversedWord);
  }

  // Join the reversed words to form the final reversed sentence
  const reversedSentence = reversedWords.join(' ');

  return reversedSentence;
}

// Example usage
const inputSentence = "This is a sunny day";
const reversedSentence = reverseWords(inputSentence);
console.log(reversedSentence);
