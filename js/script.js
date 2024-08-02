/* 
Descrizione:
Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
Consigli del giorno:
Pensate prima in italiano.
Dividete in piccoli problemi la consegna.
Individuate gli elementi di cui avete bisogno per realizzare il programma.

 */



/* 
  variabili globali
 */

const minnumber = 1;
const maxnumber = 5;
const randomNumbers = []; 
// array vuota nella quale pusheremo i mnumeri inseriti dall'utente
const numbersContainer = document.getElementById('numbers-container');
const timeToWait = 3 ;

// const numbersRight = document.getElementById('numbers-right');


/* ---------------- */

// creo un ciclo per generare con la funzione 5 numeri casuali
for ( let i = 0 ; i < 5 ; i++ ){
  console.log(i, 'iterazione ')
  const num = generateNumberRandom(minnumber , maxnumber);
  console.log('num' , num , typeof num );
  // inseriamo con il push i numeri nell'array
  randomNumbers.push(num);
  // insrisco i numeri nell'html attraverso l'id assegnata con la costante numbersConteiner
  numbersContainer.innerHTML += `
      <div>
        ${num}
      </div> 
  ` ;
}
console.log(randomNumbers);

// creo un setTimeout per far scomparire i numeri dalla pagina
setTimeout(function () {
numbersContainer.innerHTML = ''; 
}, (timeToWait -1) * 1000);


setTimeout(function () {
  console.log('timer finito'); 
  // per far scomparire gli elementi 
//    numbersContainer.innerHTML = `
//    <p>
//     Inserisci i numeri in ordine di come li hai visti prima della loro scomparsa 
//    </p> 
// `;

// creo un contatore per i numeri indovinati e uno per quelli sbagliati
let right = 0;
let wrong = 0;

// cislo per i 5 prompt
for (let i = 0; i < randomNumbers.length; i++){
  const userNumber = parseInt(prompt(`Inserisci il ${i + 1}° numero: `));
  console.log('userNumber' , userNumber , typeof userNumber );
// condizione per comparare i numeri scomparsi e quelli inseriti dall'utente atraverso l'indice 
  if(userNumber  == randomNumbers[i]){
    console.log('hai indovinato');
    right++;
  //   numbersRight.innerHTML += `
  // Hai indovinato ${right} numeri
  // ` ;
  }
  else{
    console.log('hai sbagliato')
    wrong++;
  }

}
// comunicazione attraverso gli alert dei numeri indovinati e sbagliati 
alert(`Hai indovinato ${right} numeri`);
alert(`Hai sbagliato ${wrong} numeri`);

}, timeToWait * 1000); 




/* 
  funzioni
 */

function generateNumberRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }
