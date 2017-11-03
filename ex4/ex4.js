for (var i = 0; i <21; i++)
  if((i%2)==0)

console.log(i + "est pair");

for (var i = 0; i<11; i++)
console.log(i*9);


function grade(i){
if (i>90) {
  console.log("le grade est A");

}
else if (i>80) {
  console.log("le grade est B");
}
else if (i>70) {
  console.log("le grade est C");

}
else if (i>65) {
  console.log("le grade est D");
}
else{
  console.log("le grade est F");
}
}
grade(77);



for(var i = 1; i<6; i++){
  for(var n = 0; n<i; n++){
    document.write("*");
  }
  document.write("<br>");
}
