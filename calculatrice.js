//  récupère l'élément d'affichage
let display = document.querySelector('#display');

//  récupère tous les boutons chiffres
let numberrButtons = document.querySelectorAll('[data-number]');

//  récupère le bouton "C"
let clearButton = document.querySelector('.clear');

// Boucle  pour parcourir tous les boutons chiffres
for (let i = 0; i < numberrButtons.length; i++) {
  const button = numberrButtons[i];

  button.addEventListener('click', function() {
    const number = button.getAttribute('data-number');
// ajout chiffre
   if (display.textContent == "0") {
      display.textContent = number;
    } else {
      display.textContent += number;
    }

   //tentative pour enlever le 0 
// if (display.text.content=0){
    //     display.textContent = number;
    // }else {
    //     display.textContent += number;
    // }
 });
}


// Bouton c remettre a 0 clear
clearButton.addEventListener('click', function() {
  display.textContent = '0';
});

let numOperator =document.querySelectorAll('[data-operator]')  

for (let i = 0; i < numOperator.length; i++) {
  const button = numOperator[i];

  button.addEventListener('click', function() {
    const operator = button.getAttribute('data-operator');
// ajout operator
   if (display.textContent  == "0"){
    return
   }else {
    display.textContent += operator
   }
 });
}

// if (number1 === "") {
//   return;
// }





// if (operator === "") {
//     return;
// }else {
//   ("")
// }



// for(let value of arr){
//     if(maxValue == null){
//         maxValue = value;
//     }else if(maxValue < value){
//         maxValue = value;
//     }
// }