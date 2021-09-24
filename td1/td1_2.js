let entiers = [1,5,10,23,51];
let entiers2 = [3,9,14,16,48];

exercice4_4Alg(entiers,5);

function exercice2_1(){
    getType(x);
    x = 'blabla';
    getType(x);
    x = "blabla";
    getType(x);
    x = `blabla {$x}`;
    getType(x);
    x = 9;
    getType(x);
    x = 2.5;
    getType(x);
    x = true;
    getType(x);
    x = undefined;
    getType(x);
    x = null;
    getType(x);
    x = [1,2,3];
    getType(x);
    x = new Array();
    getType(x);
    x = {};
    getType(x);
    x = {"promo":"lpwmce", "nb":25};
    getType(x);
    x = new Date();
    getType(x);
    x = function() {alert('toto')};
    getType(x);
    x = 42n;
    getType(x);
}


function exercice2_3(){
    b="toto";
    getType(b);
    b = Number.parseInt(b);
    getType(b);
    b = parseFloat(b);
    getType(b);
    b = toString(b);
    getType(b);
    b = parseInt(b);
    getType(b);
    b = Number.parseFloat(b);
    getType(b);
    b = Number(b);
    getType(b);
    y = 2.2;
    getType(Math.floor(y));
    getType(Math.ceil(y));
    getType(Math.round("test"));


}

function exercice2_4(){
    let b=false;
    let n=0;
    let s='0';
    let tab = [];
    let o = {};

    console.log(b == n);
    console.log(n === s);
    console.log(tab == o);
    console.log(n == s);
    console.log(b == o);
}

function exerice3_1(){
    console.log("test");
    msg = "Entrer une chaine de caratère en majuscule !";
    var ch = prompt(msg) ;
    while(ch != ch.toUpperCase()){
        ch = prompt(msg);
    }
}

function exercice3_2(){
    let chaine = "";
    let essais = 0;
    do{
        chaine = rdmChar();
        essais++;
    }
    while(chaine != chaine.toUpperCase());
    console.log(chaine);
    console.log(essais);
}


function exercice3_3(){
    let voyelles = ["a","e","i","o","u","y"];
    let mot="";
    for(let i=0;i<5;i++){
        mot=mot + voyelles[Math.floor(Math.random() * (voyelles.length-1 + 1))]
    }
    console.log(mot);
}

function exercice3_4(){
    let fname = prompt("Entrer votre nom");
    let lname = prompt("Entrer votre prenom");
    fname = fname.toUpperCase();
    lname = lname.toLowerCase();
    lname = lname[0].toUpperCase() + lname.slice(1);
    console.log(fname.concat(lname));
}

function exercice3_5(){
    let mdp = prompt("Entrer quelque chose à crypter.");
    let cryptedWord = "";
    
    for(let i = 0; i < mdp.length;i++){
        switch (mdp.charAt(i)) {
            case "A","a":
                cryptedWord = cryptedWord + "4";
                break;
            case "E","e":
                cryptedWord = cryptedWord + "3";
                break;
            case "G","g":
                cryptedWord = cryptedWord + "6";
                break;
            case "I","i":
                cryptedWord = cryptedWord + "1";
                break;
            case "O","o":
                cryptedWord = cryptedWord + "0";
                break;
            case "S","s":
                cryptedWord = cryptedWord + "5";
                break;
            case "Z","z":
                cryptedWord = cryptedWord + "2";
                break;
        
            default:
                cryptedWord = cryptedWord + mdp.charAt(i);
                break;
        }
    }

    console.log(cryptedWord);

}


function exercice3_6(){
    let n = 15;
    for(let i=1;i<=n;i++){
        if((i%3 == 0)&&(i%5 == 0)){
            console.log(" Jazz Bundle");
        }
        else if(i%3 == 0){
            console.log("Jazz");
        }
        else if(i%5 == 0){
            console.log("Bundle");
        }
        else{
            console.log(i);
        }
    }
}

function exercice4_1(entiers){
    
    let total1 = 0;
    for(let i = 0;i<entiers.length;i++){
        total1=total1+entiers[i];
    }
    console.log(total1);
}

function exercice4_1Alg(entiers){
    
    let total1 = 0;
    for(let i = 0;i<entiers.length;i++){
        total1=total1+entiers[i];
    }
    console.log(total1);
}

function exercice4_1Fonct(entiers){
    console.log(entiers.reduce((a, b)=> a + b,0));
}

function exercice4_2Alg(entiers){
    let nbPaire = 0;
    for(let i = 0;i<entiers.length;i++){
        if(entiers[i]%2 == 0) nbPaire++;
    }
    console.log(nbPaire);
}

function exercice4_2Fonct(entiers){
    console.log(entiers.filter(a => a % 2 === 0).length);
}

function exercice4_3Alg(entiers,entiers2){

    let newTab = [];
    let nb1 = 0;
    let nb2 = 0;

    for(let i = 0; i < (entiers.length + entiers2.length); i++) {
        let sauv1 = entiers[nb1];
        let sauv2 = entiers2[nb2];

        if(sauv1 == undefined) sauv1 = sauv2+1;
        else if(sauv2 == undefined) sauv2 = sauv1+1;

        if (sauv1 < sauv2) {
            newTab[i] = sauv1;
            nb1++;

        } else if (sauv1 > sauv2) {
            newTab[i] = sauv2;
            nb2++;
        }
  }

  console.log(newTab);
    
}

function exercice4_3Fonct(entiers,entiers2){

    
    
}


function exercice4_4Alg(table, item){

    let borneInf = 0;
    let borneSup = table.length - 1;

    while (borneInf <= borneSup) {
        const centre = Math.floor((borneInf + borneSup) / 2);
        const item2 = table[centre];

        if (item2 === item) {
            console.log(centre);
            return centre;
        }

        if (item2 > item) {
            borneSup = centre - 1;
        } else {
            low = centre + 1;
        }
    }

    console.log("Non trouvée");
}


function getType(x){
    console.log(typeof x);
    var x;
}

function rdmChar(){
    var str = "";
    for(let i=0;i<5;i++){
        str = str + String.fromCharCode(65 + Math.random()*(123-65));
    }
    return str;
}


function moveRight(table,i){
    for(j=table.length-1;j>=i;j--){
        table[j+1] = table[j];
    }
}