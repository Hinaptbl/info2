
function inuneko(){
   var point=0;



if(document.question.a[0].checked){point+=1}
if(document.question.a[1].checked){point+=0}

if(document.question.b[0].checked){point+=1}
if(document.question.b[1].checked){point+=0}

if(document.question.c[0].checked){point+=200}
if(document.question.c[1].checked){point+=100}

if(point>200){      ///マップへ
 location.href="finalp2.html";
}
if(point<=200){　　　　　　　　///署名へ
 location.href="finalp3.html";
}
}
