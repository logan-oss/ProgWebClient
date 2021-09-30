let tableRes;
let n = 0;
let j1=prompt("Bienvenue au jeux du Morpion.\nEntrer le nom du premier joueur :");
let j2=prompt("Entrer le nom du deuxième joueur :");
let errorMsg1 = "Impossible, c'est case est déjà jouée !";
let errorMsg2 = "La taille n'a pas été choisie !";
let size ="";
let mode = "";


let tbBtn = document.getElementsByClassName('sizeBtn');
let tbModeBtn = document.getElementsByClassName('modeBtn');

for( btn of tbBtn ){                                                        // event add
  btn.addEventListener("click",function(){
    for( btn2 of tbBtn ){
      btn2.style.backgroundColor ="#E2E2E2";
    }
    this.style.backgroundColor = "#797979";
    size = this.textContent;
  });
}

for( btn of tbModeBtn ){                                                        // event add
  btn.addEventListener("click",function(){
    mode = this.getAttribute("value");
    if(size==""){
      alert(errorMsg2);
    }
    else
      init(size);
  });
}

while((j1 == null)||(j1.trim() == "")){
  j1 = prompt("Il faut un joueur 1 ! (Entrer votre nom)");
}

while((j2 == null)||(j2.trim() == "")){
  j2 = prompt("Il faut un joueur 2 ! (Entrer votre nom)");
}

let textJ1 = "C'est au tour de "+j1+" de jouer !";
let textJ2 = "C'est au tour de "+j2+" de jouer !";
let turn = j1;                                            // the turn begin with J1


function init(size){
let n=0;

 switch (size) {
   case "3x3":
      n=3;
     break;
    case "4x4":
      n=4;
      break;
    case "5x5":
      n=5;
      break;
    case "6x6":
      n=6;
      break;
    case "7x7":
      n=7;
      break;
    case "8x8":
      n=8;
      break;
    }

tableRes = new Array(n);

  let tableJeu = document.getElementById('tableJeu');
  let codeTableJeu = "";
  for(let i=0;i<n;i++){
    codeTableJeu = codeTableJeu + "<tr>";
    tableRes[i] = new Array(n);

      for(let y=0;y<n;y++){
        codeTableJeu = codeTableJeu + "<td value='"+i+"-"+y+"'></td>";        // Create all td of the visual table
        tableRes[i][y]= 0;                                            // fill the result table
      }

    codeTableJeu = codeTableJeu + "</tr>";
  }

  tableJeu.innerHTML = codeTableJeu;

  document.getElementsByClassName('mode')[0].style.visibility = "hidden";     // Hide the mode nav
  let tds = document.getElementsByTagName("TD");

  for(td of tds){
    td.addEventListener("click",choose);
  }

  document.getElementById("playerTurn").textContent = textJ1;

}

function choose(){
  if (this.textContent === "") {
    if(turn == j1){
      this.textContent = "O";
      turn = j2;
      document.getElementById("playerTurn").textContent = textJ2;
    }
    else{
      this.textContent = "X";
      turn = j1;
      document.getElementById("playerTurn").textContent = textJ1;
    }
  }
  else {
    alert(errorMsg1);
  }
}
