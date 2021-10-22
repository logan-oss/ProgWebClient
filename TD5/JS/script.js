let tableCommune = [];

window.addEventListener("load", function(){

addRegion();


});

function addRegion(){ // ---> récupération des données serveur
  fetch("https://geo.api.gouv.fr/regions",{
    method : 'get'
  }).then(response => response.json())
  .then(regions => addSelectRegions(regions))
  .catch(function(err){
    alert(err);
  });
}

function addDptd(){ // ---> récupération des données serveur
  let select = document.getElementById('rgs');
  let code = select.options[select.selectedIndex].value;

  fetch("https://geo.api.gouv.fr/regions/"+code+"/departements",{
    method : 'get'
  }).then(response => response.json())
  .then(dpt => addSelectDpt(dpt))
  .catch(function(err){
    alert(err);
  });
}

function addComm(){ // ---> récupération des données serveur
  let select = document.getElementById('dpt');
  let code = select.options[select.selectedIndex].value;

  fetch("https://geo.api.gouv.fr/departements/"+code+"/communes",{
    method : 'get'
  }).then(response => response.json())
  .then(comm => addSelectComm(comm))
  .catch(function(err){
    alert(err);
  });
}

function addSelectRegions(table){ // ----> affichage des données seveur
  var selectReg = document.getElementById('rgs');
  selectReg.innerHTML = "";

  table.forEach((item, i) => {
    selectReg.innerHTML = selectReg.innerHTML + "<option value="+item.code+">"+item.nom+"</option>";
  });

  selectReg.selectedIndex = 0;

  addDptd();
}

function addSelectDpt(table){ // ----> affichage des données seveur
  var selectDpt = document.getElementById('dpt');
  selectDpt.innerHTML = "";

  table.forEach((item, i) => {
    selectDpt.innerHTML = selectDpt.innerHTML + "<option value="+item.code+">"+item.nom+"</option>";
  });

  addComm();
}

function addSelectComm(table){ // ----> affichage des données seveur
  tableCommune = table;
  var selectComm = document.getElementById('comm');
  selectComm.innerHTML = "";

  table.forEach((item, i) => {
    selectComm.innerHTML = selectComm.innerHTML + "<option value="+item.code+">"+item.nom+"</option>";
  });

  showCommTable();
}

function showCommTable(){ // ----> affichage des données seveur
  let select = document.getElementById('comm');
  let tableVille = document.getElementById('tableVille');
  let p = document.getElementById('population');
  tableVille.innerHTML = "";

  villeSelect = tableCommune.filter(a => a.code == select.options[select.selectedIndex].value)[0];
  console.log(villeSelect);
  sessionStorage.setItem('ville',JSON.stringify(villeSelect));
  tableCP = villeSelect.codesPostaux;
  p.innerHTML = "Population : " + villeSelect.population + " habitants.";

  let villes = tableCommune.filter(a => tableCP.includes(a.codesPostaux[0]));

  //--- remplissage du tableau ---//
  villes.forEach((ville, i) => {
     tableVille.innerHTML = tableVille.innerHTML + "<tr><td>"+ville.nom+"</td><td>"+ville.codesPostaux[0]+"</td><td>"+ville.population+"</td></tr>";
  });

}
