document.getElementsByTagName("body");
document.body.classList.remove("bg-aqua");
document.body.classList.add("bg-olive");
document.getElementById("first-paragraph").classList.remove('bg-lime', 'gray');
document.getElementById("first-paragraph").classList.add('aqua');
document.querySelectorAll('.bg-silver').forEach((element) => {
    element.classList.add('bg-teal');
    element.classList.remove('bg-silver');
});
document.querySelectorAll('blockquote').forEach((element) => {
    element.classList.add("bg-white");
});

/*ex2*/

document.querySelectorAll('#my-table').forEach((element) => {
    element.classList.add("bg-purple")
});
document.querySelectorAll('.container').forEach((element) => {
    element.classList.add("shadow");
});
/*ex3*/
document.querySelectorAll('pre').forEach((element) => {
    element.style.color = '#v4q9z8';
    element.style.backgroundColor = '#f5d4b9';
    element.style.borderTop = "3px solid red";
    element.style.borderBottom = "3px solid red";
});
document.querySelector('h3').innerHTML = "<em>Italic title ! yeah !</em>";
document.querySelector('h2').innerHTML = "<strong>HTML doens't work !</strong>";

/*ex4*/
var liNew = document.createElement('li');
liNew.innerHTML = "Mon meilleur ami est <a href='http://www.google.com'>Google</a>";
document.querySelector('ul').appendChild(liNew);
liNew.querySelector('a').style.color = '#4F4F4F'




/*ex5*/
var ol = document.querySelector('ol');
[...ol.children].forEach((child) => ol.removeChild(child));
var myArray = ["Silent Teacher", "Code Monkey", "CodeCombat"]
for (var i = 0; i < myArray.length; i++) {
    var element = document.createElement("li");
    element.innerHTML = myArray[i];

    ol.appendChild(element);
}


/*


EXERCICE 4 : Création et suppression de plusieurs éléments

    sélectionner le premier élément 'ol'

  faire une boucle sur tous les enfants de ce dernier grâce à sa propriété children

    supprimer chaque enfant de 'ol' grâce à removeChild()

    déclare dans un tableau les valuers suivantes : ["Silent Teacher","Code Monkey", "CodeCombat"]

    faire une boucle sur tous les enfants du tableau précédement crée

    pour chaque valeur du tableau crée un élément 'li' crâce à document.createElement()

    ajouter à chaque 'li' la valeur courrante tableau

    ensuite ajouter chaque 'li' à l'élément 'ol' précédement sélectionné

Reminder

Selecteurs

    document.getElementById()
    document.getElementsByClassName()
    document.getElementsByTagName()
    document.querySelector()
    document.querySelectorAll()

Création d'éléments

    document.createElement()
    element.appendChild()

Manipulation de classes CSS

    element.className
    element.classList.remove()
    element.classList.add()
    element.classList.toggle()

Manipulation CSS

    element.style ( ex : element.style.backgroundColor = "blue")

Autres

    element.id
    element.innerHTML
    element.innerText
*/
