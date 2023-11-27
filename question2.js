// 2. String-arrays (3p)
// Skriv klart funktionen filterWordsWithLetterA som tar en array med strängar som
// input och returnerar en array med bara de strängar som innehåller "a" (bara liten bokstav).
// tips: använd indexOf eller includes

function filterWordsWithLetterA(words) {
  //Din kod här
  // jag har användet fillter för att kunna tar det med sträng 
  const filteredWords = words.filter(word => word.includes('a'));

  // Returnera den filtrerade arrayen
  return filteredWords;

}
console.log(filterWordsWithLetterA(["Programming", "is", "great!"])); // ska logga ["Programming", "great!"]



