var Character={
  name:"narvalo",
  age:72,
  items_to_give:["savon","bazooka","chaise","fromage"],
  giveItem : function (item){
      var obj=Math.ceil(Math.random()*(this.items_to_give.length-1));
      console.log(this.items_to_give[obj]);

  }
}

for (var prop in Character){

  if(prop != "giveItem")
    console.log (`Character.${prop} = ${Character[prop]}`);
  else
    Character.giveItem()
}


var newarray = avendre=
[épée={title:'unagi',physic:12,magic:2,minLevel:14,available:true},
hache={title:'calin',physic:16,magic: 0,minLevel:22,available:false,},
sceptre={ title:'petitponey',physic:3,magic:29,minLevel:8,available:true,},
chaise={title :'miaou',physic:52,magic: 8,minLevel:36,available:false}]

var objet= function(arme){
  for(i=0;i<avendre.length;i++){

    console.log(avendre[i]);
  }
}
objet()

var dispo = function (available){
  for(i=0;i<avendre.length;i++){
    var element = avendre[i];
    if(element.available ==true)
    console.log(avendre[i]);
  }
}
dispo()

var lvmin = function (lv){
  for(i=0;i<avendre.length;i++){
    var element = avendre[i];
    if(element.minLevel >=10)
    console.log(avendre[i]);
  }
}
lvmin()


var mainCharacter={
  name:'ariol',
  level:120,
  life:30,
  weapon :{
    name:'poupipou',
    damage:20
  },
  attack : function (paff){
    var aye= this.level*this.weapon.damage
    console.log(this.name+" "+this.weapon.name+" "+ aye)
  }
}
mainCharacter.attack()
