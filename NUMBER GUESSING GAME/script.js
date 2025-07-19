
var score=document.getElementById("ps");
var c=10;
var r=document.getElementById("review");

function check(){

  var userno=document.getElementById("inp1");
  var uno=userno.value;
  console.log(uno);

  var randomno=Math.random()*10;
  var rno=Math.floor(randomno);
  console.log(rno);


  if(rno==uno){
      c=c+1;
      score.textContent=c;
      r.textContent="you win"

    
    console.log("true");

  }
  else{
    c=c-1;
    score.textContent=c;
    r.textContent="you loose"
  
    console.log("false");
  }
  


}