//---------------------------1.1-------------------------------//

$("h2").eq(0).html("Article 0");


// //---------------------------1.2-------------------------------//
let listH2 = $("h2");
listH2.each(function(){
  $(this).css("textTransform" , "uppercase");   //1.2
  let splitTitle = $(this).html().split(' ');
  splitTitle[1] = listH2.index($(this)) + 1;  //1.3
  $(this).html(splitTitle.join(' '));
  if(parseInt(splitTitle[1])%2==0){
    $(this).css("backgroundColor","#60B96C");
    $(this).nextAll().css("backgroundColor","#60B96C");} //1.4
  else {
    $(this).css("backgroundColor","white");
    $(this).nextAll().css("backgroundColor","white");}
});

// //---------------------------1.5-------------------------------//
// let sibling = document.getElementsByTagName("h2")[3];

// while (sibling.tagName != "UL") {  // Find the first UL
//   sibling = sibling.nextSibling;
// }

console.log($("h2").eq(2).html());

// let tableInscr = [];

// while(true){                      // Get and push all next UL in table
//  if(sibling.tagName=="UL"){
//    tableInscr.push(sibling);
//    sibling = sibling.nextSibling;
//  }
//  else if (sibling.tagName == undefined) {
//    sibling = sibling.nextSibling;
//  }
//  else
//     break;
// }

// tableInscr.reverse();

// for(e of tableInscr){
//   bodyb.insertBefore(e,sibling);
// }
