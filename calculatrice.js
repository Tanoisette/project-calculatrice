
//  récupère l'élément d'affichage
let display = document.querySelector('#display');

//  récupère tous les boutons chiffres
let numberrButtons = document.querySelectorAll('[data-number]');

//  récupère le bouton "C"
let clearButton = document.querySelector('.clear');

// Boucle  pour parcourir tous les boutons chiffres
for (let i = 0; i < numberrButtons.length; i++) {
  const button = numberButtons[i];

  button.addEventListener('click', function() {
    const number = button.getAttribute('data-number');
// ajout chiffre
    display.textContent += number;
  });
}

// Bouton c remettre a 0 clear
clearButton.addEventListener('click', function() {
  display.textContent = '0';
});