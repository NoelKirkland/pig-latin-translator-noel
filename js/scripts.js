
const vowels = ["a", "e", "i", "o", "u"];
const consonants = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y']




// User interface
$(document).ready(function(){
  $("form#pig-latin").submit(function(event){
    event.preventDefault();
    let inputSentence = $("input#input-sentence").val();
    let splitSentence = inputSentence.split(" ");
    let splitCharacter = inputSentence.split("");
    for (let i=0; splitSentence.length > i; ++i) {
      if (splitSentence[i].length === 1) {
        splitSentence[i] += "way";
        console.log(splitSentence[i]);
        } else if (consonants.indexOf(splitSentence[0])) {
            splitSentence[i] += "way";
            console.log(splitSentence[i]);
        }
    }
//    let splitCharacter = splitSentence.join(" ").split("");

  });
});
