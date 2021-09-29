//---------------------------1.1-------------------------------//
let bodyb = document.getElementsByTagName('BODY')[0];
let article0 = "<h2>Article 0</h2><p><span style=\"color:#000000;\">Il est interdit de doubler PORAYKO Logan, sous peine de disqualification</p>";
bodyb.innerHTML = article0 + bodyb.innerHTML;

//---------------------------1.2-------------------------------//
let titreArt = document.getElementsByTagName("h2");
let i = 1;
for(let titre of titreArt){
  titre.style.textTransform = "uppercase";   //1.2
  let splitTitle = titre.innerHTML.split(' ');
  splitTitle[1] = i;  //1.3
  titre.innerHTML = splitTitle.join(' ');
  if(i%2==0){titre.style.backgroundColor = "#60B96C";} //1.4
  i++;
}


//---------------------------1.5-------------------------------//
let sibling = document.getElementsByTagName("h2")[3];

while (sibling.tagName != "UL") {  // Find the first UL
  sibling = sibling.nextSibling;
}

let tableInscr = [];

while(true){                      // Get and push all next UL in table
 if(sibling.tagName=="UL"){
   tableInscr.push(sibling);
   sibling = sibling.nextSibling;
 }
 else if (sibling.tagName == undefined) {
   sibling = sibling.nextSibling;
 }
 else
    break;
}

tableInscr.reverse();

for(e of tableInscr){
  bodyb.insertBefore(e,sibling);
}
