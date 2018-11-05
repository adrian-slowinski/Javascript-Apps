/*
0. Przypisanie do zmiennej zawartości znacznika
1. Pobranie zawartości znacznika do tablicy
2. Wyszukanie odpowiedniego stringa w tablicy
3. Podmiana zawrtości indeksu przez dodanie twardej spacji 
4. Wrzucenie zawartości nowej tablicy do pobranego wcześniej znacznika

*/


let para = document.querySelector(".p1"); // Pobranie zawartości klasu p1. Dzięki querySelector jest możliwość wykorzystania metod jak w tablicy

let paraText = para.textContent;  // Wyciągniecie textu z  paragrafu

let paraArr = paraText.split(" "); // Przerobienie tekstu na obiekt tablicopodobny i wrzucenie słow do indexu. Linią podziału jest spacja
 
console.log(paraArr) 

for(let word in paraArr){
  if (`${paraArr[word]}`  === "z"){  // sprawdzenie czy w indexie jest jednoznak
    console.log(`Znalazłem go! "${paraArr[word]}" Jest tutaj ${word}`);
    // Wyświetlenie miejsca w jakim się znajduje
     
    let findLonelyWord =  paraArr[word];  //Przypisanie tego indeksu do zmiennej
    let deleteLonelyWord = delete findLonelyWord; // usunięcie niepotrzebnej zawartości z indeksu. Delete zwraca nam usuniety element. W sumie to chyba nawet nie jest potrzebne w tej sytuacji. Bo zawartość nadpisuje mi się poniżej 
    findLonelyWord += "&nbsp;";   // Przypisanie nowej wartości 
    paraArr[word] = findLonelyWord;  // Nadpisanie zawartości indeksu
  }
}
console.log(paraArr)

para.innerHTML = paraArr.join(); //Wrzucenie zawartości nowej tablicy do pobranego paragrafu

console.log(para)

 








































