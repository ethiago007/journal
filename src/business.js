export  function wordCounter(text) {
    if (text.trim().length === 0) {
      return 0;
    }
    let wordCount = 0;
    const wordArray = text.split(" ");
    wordArray.forEach(function (element) {
      if (!Number(element)) {
        wordCount++;
      }
    });
    return wordCount;
  }
  
export  function numberOfOccurrencesInText(word, text) {
    if ((text.trim().length === 0) || (word.trim().length === 0)) {
      return 0;
    }
    const wordArray = text.split(" ");
    let wordCount = 0;
    wordArray.forEach(function (element) {
      if (element.toLowerCase().includes(word.toLowerCase())) {
        wordCount++;
      }
    });
    return wordCount;

  }
 

export function countVowel(title) { 

    const count = title.match(/[aeiou]/gi).length;
    
   
    return count;

}
export function countConsonant(lol) {
     const cluster = lol.match(/[bcdfghjklmnpqrstvwxyz]/gi).length;
     return cluster;
 }

