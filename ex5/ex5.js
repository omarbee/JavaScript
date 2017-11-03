
  /**  crée un tableau qui contient les valeurs suivantes : 1, 2, 3, 4, 5, 6, 7, 8, 9
    faire une boucle qui permet d'additioner toutes ces valeurs

Exercice : Vos meilleurs choix

    crée un tableau qui contetient 3 nom d'acteurs

    Pour chaque acteur, afficher dans la console par exemple : "Le numero 1 est Stalone"

Bonus:transformer en : "Le premier est Stalone", Le deuxième est Cruiz", etc...
Exercice : clone

    crée un tableau qui contetient les valeurs suivantes : "Mario", "Luigi", "Peach"
    dupliquer le tableau et y ajouter "Bowser"
    var tabLanguages_2 = new Array();

   for (var i = 0; i < tabLanguages.length; i++){
     tabLanguages_2[i] = tabLanguages[i];
   }

   tabLanguages_2[0] = 'JAVASCRIPT';
   document.write(tabLanguages[0]);// Affiche javascript.
   // Les 2 tableaux sont bien indépendants


    **/




emptyArray = [1,2,3,4,5,6,7,8,9];
var addition = 0;
for(var i = 0; i < emptyArray.length; i++){
  addition +=(emptyArray[i]);

  }
console.log("add = " + addition);



nomActeur = ["Brad Pit","Math Dammon","Leonardo Dicaprio"];
nomActeur[0]="Leonardo Dicaprio";
console.log("Le numéro 1 est "+nomActeur[0]);
console.log("Le numéro 2 est "+nomActeur[1]);
console.log("Le numéro 3 est "+nomActeur[2]);


nintendo = ["Mario","Luigi","Peach"];
var nintendo_2 = new Array();
for (var i = 0; i < nintendo.length; i++){
  nintendo_2[i] = nintendo[i];
}
nintendo_2[3]= 'Bowser';
console.log(nintendo_2[3]);
