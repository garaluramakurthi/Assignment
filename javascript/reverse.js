function reverseWords(sentence) {
    // Split the sentence into words
    const words = sentence.split(' ');

    // Reverse each word
    const reversedWords = words.map(word => reverseString(word));

    // Join the reversed words back into a sentence
    const reversedSentence = reversedWords.join(' ');

    return reversedSentence;
}

function reverseString(str) {
    // Split the string into an array of characters, reverse it, and join back into a string
    return str.split('').reverse().join('');
}

// Example usage
const inputSentence = "This is a sunny day";
const reversedResult = reverseWords(inputSentence);
console.log(reversedResult);
