let nbessais = 0;
var valMin = 20;
var valMax = 80;
function returnRandom() {
    return (Math.floor(Math.random() * (valMax - valMin)) + valMin);
}
const random = returnRandom();


function justePrix() {
    var prixDonner = window.prompt('Le juste prix est entre 20 et 80');
    if (+prixDonner === random) {
        bonPrix();
    }
    else if (prixDonner> random) {
        window.alert("C'est moins");
        nbessais++;
        justePrix();
    }
    else if (prixDonner < random) {
        window.alert("C'est plus");
        nbessais++;
        justePrix();
    }

    function bonPrix() {
        window.alert("Tu as réussi en " + nbessais + " essais !");
    }
}
justePrix();
