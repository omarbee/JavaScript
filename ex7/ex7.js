/*Déclarez les variables suivantes :

    La valeur est égal au chiffre le plus petit dans l'enssemble suivant : 7, 5, -12, 6, 32, 18, 14, -2
    La valeur est égal au chiffre le plus grand dans l'enssemble suivant : -3, 9, 21, 36, 27, 54, 17, 35
    La valeur est égal a l'addition des deux précédentes variables

Exercice : Aléatoire 1

    Faire une variable floatBateau dont la valeur est 10.4
    Faire une variable couleBateau dont la valeur est floatBateau arrondie vers le bas
    Faire une variable voleBateau dont la valeur est floatBateau arrondie vers le haut

Exercice : Aléatoire 2

Déclarez les variables suivantes :

    La valeur aléatoire entre 50 et 100
    La valeur aléatoire peut être seulement 0 ou 1
    La valeur aléatoire peut aller de 0 à 10 inclu

Exercice : aléatoire 3

    crée un tableau qui contetient les valeurs suivantes : Goro, Johnny Cago, Kano, Liu Kano, Raiden, Reptil, Scorpion, Shang Tsun, Sonya, Sub-Zero
    choisir un personnage aléatoirement dans le tableau
*/
var tab1=[7, 5, -12, 6, 32, 18, 14, -2];
var tab2=[-3, 9, 21, 36, 27, 54, 17, 35];
var a = Math.min(7, 5, -12, 6, 32, 18, 14, -2);
var b = Math.max(-3, 9, 21, 36, 27, 54, 17, 35);
var total= 0;
 tab1.push(-3, 9, 21, 36, 27, 54, 17, 35);
    for(var i = 0; i < tab1.length; i++){
    total +=(tab1[i]);

  }

console.log(a);
console.log(b);
console.log(total);


var floatBateau = 10.4;
var couleBateau= Math.ceil(floatBateau);
var voleBateau= Math.floor(floatBateau);
console.log(couleBateau);
console.log(voleBateau);

  var z50100= Math.random()*(101 - 50) + 50;
  console.log(z50100);

  var z01= Math.random();
  console.log(z01);

  var z011= Math.random()*(11 - 0) + 0;
  console.log(z011);

  mortalCombat=["Goro", "Johnny Cago", "Kano", "Liu Kano", "Raiden", "Reptil", "Scorpion", "Shang Tsun", "Sonya", "Sub-Zero"];
   var mortal= Math.ceil(Math.random()*(mortalCombat.length));
   console.log(mortalCombat[mortal]);
