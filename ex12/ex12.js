document.querySelectorAll('.overme').forEach((element) => {/*on selctionne les elements avec la classe overme et on fait une boucle on lit chacun d'eux */
    element.addEventListener('mouseover', (event) => {/*pour l'élément séléctionné on utilise le addEventListener qui va prendre en compte notre eveenement qui est le mouseover*/
        event.target.style.visibility = "hidden";/*on récupère l'evenement et on lui dit d'appliquer un nouveau style sur l'élémént ciblé*/
    });/* fin de notre evenement*/
});/*fin de instruction*/
document.getElementById("reset").addEventListener('click', (event) => {/*on selectionne notre id reset et on applique l'evenement click dessus*/
    document.querySelectorAll('.overme').forEach((element) => {/*à l'intérieure on va faire une boucle pour appliquer un style visible à nos div overme c'est à dire que cette*/
        element.style.visibility = "visible";/*transformation n'est possible que grace à l'evenement click elle dépend directement de lui*/
    });
});
document.getElementById("reset").addEventListener('click',(event) =>{
    document.querySelectorAll('.overme').forEach((element)=>{
        element.style.color="red";

    });
});
