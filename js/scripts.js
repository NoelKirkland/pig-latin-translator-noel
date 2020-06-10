// // Business logic
// function pigLatinTranslator(splitSentence){
//   for (let i=0; splitSentence.length > i; ++i) {
//     let splitCharacter = splitSentence.split("");
//       if (splitCharacter[i] !== vowels) {
//         return true;
//}
//   };
// };

// User interface
$(document).ready(function(){
  $("form#pig-latin").submit(function(event){
    event.preventDefault();
    let inputSentence = $("input#input-sentence").val();
    let splitSentence = inputSentence.split(" ");
    let splitCharacter = splitSentence.join(" ").split("");
    // let splitCharacter2 = inputSentence.split("");
    const vowels = ["a", "e", "i", "o", "u"];
    let returnString = "";
      if(vowels.indexOf(inputSentence [0])>1) {
        returnString = inputSentence + "way";
        return returnString;
      }
      else {
        let firstMatch = inputSentence.match(/[aeiou]/g) || 0;
        let vowel = inputSentence.indexOf(firstMatch[0]);
        returnString = inputSentence.substring(vowel) + inputSentence.substring(0, vowel) + "ay";
        return returnString;
    }
      
  }); 
});

// for (let i = 0; i <= splitSentence.length; i++) {
//   if (splitSentence[i] === a)
//   return true;
// }

// let splitCharacters = [];
// for (const element of array) {
//   splitCharacters.split(element);

  // for (let index = 0; index <= splitCharacter.length; index++){

  // }