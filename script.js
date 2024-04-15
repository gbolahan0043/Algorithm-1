/*At this checkpoint, you are asked to write an algorithm that read a sentence, which ends with a point, character by character, and to determine:InstructionsThe length of the sentence (the number of characters).
The number of words in the sentence (assuming that the words are separated by a single space).
The number of vowels in the sentence.
You have to keep in mind that:Each character will be treated separately.
The last character is the point.
Use three variables as counters.*/

function analyzeSentence(sentence) {
    // Initialize the counters for the length, number of words, and number of vowels
    let lengthCounter = 0;
    let wordCounter = 0;
    let vowelCounter = 0;
  
    // Loop through each character in the sentence
    for (let i = 0; i < sentence.length; i++) {
      // Increment the length counter
      lengthCounter++;
  
      // If the character is a space, increment the word counter
      if (sentence.charAt(i) === ' ') {
        wordCounter++;
      }
  
      // If the character is a vowel, increment the vowel counter
      if (
        sentence.charAt(i) === 'a' ||
        sentence.charAt(i) === 'e' ||
        sentence.charAt(i) === 'i' ||
        sentence.charAt(i) === 'o' ||
        sentence.charAt(i) === 'u'
      ) {
        vowelCounter++;
      }
    }
  
    // Increment the word counter by 1 to account for the last word in the sentence
    wordCounter++;
  
    // Return an object with the three counters
    return {
      length: lengthCounter,
      words: wordCounter,
      vowels: vowelCounter,
    };
  }
  
  const sentence = 'This is a practice sentence.';
  const result = analyzeSentence(sentence);
  
  console.log(result);
  