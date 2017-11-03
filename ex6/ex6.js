
monMot=["b","o","n","j","o","u","r"];
lettreDevine=["","","","","","",""];
var j=0;/*c'est la variable qui va nous permettre de voyager dans nos tableau*/
var cpt = lettreDevine.length;/*c'est un compteur qui vas nous permettre de savoir si nous avons atteint le nombre de lettre composant le mot le jeux s'arrete là*/
console.log(cpt);
function guessLetter(l) {for(i= 0;i<monMot.length;i++){/*on met la boucle dans la fonction mais c'est la boucle qui fait tout le travail la fonction est la pour etre appelé plus tard*/
    if (monMot[i]==l){/*le if nous permet de tester l'égalité entre entre le l et l'index du tableau monMot*/
      var index = monMot.indexOf(l);/*indexOf permet de trouver la place dans un tableau ici il nous permet de savoir ou est placé la lettre que nous entrons*/
      lettreDevine.splice(index,1,l);/*splice nous permet de placer une lettre dans notre tableau 2 il va suprimer un emplacement dans le tableau 1 et placer l(lettre correcte entrée) */
      monMot.splice(index,1,"*");/*permet de placer un "*" à la place des lettre trouvées de manière à ne pas changer la longueur du mot deviné*/
      cpt--;/*décremente notre cpt pour lui indiquer quon arrive en fin de partie */
    }
}

          }
          while(cpt> 0)/*c'est la boucle qui fait tourner le jeux elle continuera à tourner tant que cpt est plus grand que zéro c''est à dire tant que le tableau 2 ne sera pas entierement rempli*/
          {
            var lettre =  prompt("bonne lettre")/*c'est la console qui nous permet d'entrer une lettre dans notre navigateur*/
            guessLetter(lettre)/*c'est l'appel de notre fonction initiale */
            j++;/*incrémentation de notre boucle */
          }
          console.log(lettreDevine);/*affiche le tableau des lettres devinées*/
