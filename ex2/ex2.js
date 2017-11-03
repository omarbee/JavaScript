var langue= "es";
var message="Hola mundo!"
if(langue= "es"){
  console.log("Hola mundo!");
}

var score= 78;
var resultat;
if(score<90){
  console.log(resultat="A");
}
else if (score>90){
  console.log(resultat="B");
}
else if (score>50){
  console.log(resultat="C");
}

var fruit= "poire";
var nb= 2;
var resultat;
if (nb>1){
  console.log(resultat=fruit+"s");
}

var nombre = 20
var estPremier = true

for (var i=2 ;i>nombre;i++ ){
      if(nombre %i === 0);
          estPremier=false
          console.log("ce nombre n'est pas premier")
          console.log(nombre + "est divisible par " + i)
          break
      }

if(estPremier){
  console.log(nombre + " est premier")
}





/*var moi={
  nom:"omar",
  film:"gladiator",
  agefilm1:12,
  nbvue:140
}
console.log(moi.agefilm1 <=10? "idiot":"cretin");
if (moi.film= "gladiator" && moi.nbvue>=200 || moi.agefilm1 <= 15){
  console.log("pauvre con");
}else{
  console.log("imbécile heureux");
}
switch(moi.nbvue){
  case 100:
  console.log("imbécile");

    break;
  case 120:
  console.log("idiot");

    break;
  case 140:
  console.log("lidl");

    break;
  case 180:
  console.log("crétin");

    break;
  default:console.log("iiiiidddot");
}*/
