let tbBtn = document.getElementsByTagName('BUTTON');
for( btn of tbBtn ){
  btn.addEventListener("click",init);
}

let j1 = prompt("Bienvenue au jeux du Morpion.\nEntrer le nom du premier joueur :");
let j2 = prompt("Entrer le nom du deuxième joueur :");

while((j1 == null)||(j1.trim() == "")){
  j1 = prompt("Il faut un joueur 1 ! (Entrer votre nom)");
}

while((j2 == null)||(j2.trim() == "")){
  j2 = prompt("Il faut un joueur 2 ! (Entrer votre nom)");
}


function init(e){
 alert(e.textContent);
}
