// Exercice 3 : Calculatrice
// Des Instructions
// Faire une calculatrice. Suivez les instructions:

// Demander à l'utilisateur le premier numéro.
// Stockez le premier nombre dans une variable appelée num1.
// Astuce : console.log le type de la variable num1. Que faire pour le convertir en nombre ?
// Demander à l'utilisateur le deuxième numéro.
// Stockez le deuxième nombre dans une variable appelée num2.
// Créez une alerte dont la valeur est la SOMME de num1et num2.
// BONUS : Réalisez un programme qui peut soustraire, multiplier et aussi diviser !



let num1= prompt("veuillez mettre le premier nombre");
let num2= prompt("veuillez mettre le deuxieme nombre");

let SUM=  parseInt(num1) + parseInt(num2);
let Subtrack = parseInt(num1) - parseInt(num2);
let multiply = parseInt(num1) * parseInt(num2);
let divide = parseInt(num1) / parseInt(num2);

alert(`la somme de ${num1} et ${num2} est ${SUM}`);
alert(`la soustraction de ${num1}et ${num2} est ${Subtrack}`);
alert(`la multiplication de ${num1}et ${num2} est ${multiply}`);
alert(`la division de ${num1}et ${num2} est ${divide}`);

// Exercice 1 : Couleur Préférée
// Des Instructions
// Écrivez un code Javascript simple qui rejoindra tous les éléments du tableau ci-dessus, et console.log le résultat.

let sentence = ["my","favorite","color","is","blue"];
let sentenceOne =sentence.join();
console.log(sentenceOne);
//joindre les eleements d'un tableau

// Exercice 2 : Mixup
// Des Instructions
// Créez 2 variables. Les valeurs doivent être des chaînes. Par exemple:

let str1 = "banana";
let str2 = "meal";
 
console.log(str1.slice(0,3));
console.log(str2.slice(0,2));
let longstr = str1.concat(str2);
// concatenation des mots
//  resultat final 
console.log(longstr);






