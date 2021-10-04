import * as td1 from "./array_utils.js";

//---------------------------------------------------//

let table = [1,3,8,9,10];

//displayResultTd1(table);

function displayResultTd1(arr){
  console.log(td1.getSum41(arr));
  console.log(td1.getNumberOfEven42(arr));
  console.log(td1.getMaxEven45(10,150,20,36,66));
}

//---------------------------------------------------//

document.getElementById('divResult').style.visibility = "hidden";

document.getElementById('newElmt').addEventListener("click",newElmt);
document.getElementById('startFunction').addEventListener("click",showRes);

function newElmt(){
  let elmtDiv = document.getElementsByClassName('divElmt');
  let divToClone = elmtDiv[elmtDiv.length-1];
  let newDiv = document.createElement("div");

  newDiv.setAttribute("class","divElmt");
  newDiv.innerHTML = divToClone.innerHTML;
  newDiv.children[0].innerHTML = "Elément "+(elmtDiv.length+1);
  document.getElementById('divCapture').insertBefore(newDiv,document.getElementById('lblSearch'));
  this.remove();

  document.getElementById('newElmt').addEventListener("click",newElmt);
}

function showRes(){
  let inputs = document.getElementsByClassName("elmtNum");
  let tableElmt=[];
  let toFind = document.getElementById('elmtToSearch').value;
  let error = false;
  for(let i=0;i<inputs.length;i++){
    if(inputs[i].value !=""){
      tableElmt.push(parseFloat(inputs[i].value));
    }
    else
      error=true;
  }

  if(toFind == "") error = true;

  if(!error){
    document.getElementById('sum').textContent = td1.getSum41(tableElmt);
    document.getElementById('per').textContent = td1.getNumberOfEven42(tableElmt);
    document.getElementById('biggestPer').textContent = td1.getMaxEven45(...tableElmt);
    document.getElementById('pos').textContent = td1.binarySearch44(tableElmt.sort((a,b) => a-b),parseFloat(toFind));
    document.getElementById('divResult').style.visibility = "visible";
  }
  else alert("Un des éléments est vide !")
}
