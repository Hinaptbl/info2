
function inuneko(){
   var point=0;
}

if(document.question.a[0].checked)
if(document.question.a[1].checked)

if(document.question.b[10].checked)
if(document.question.b[11].checked)

if(document.question.c[100].checked)
if(document.question.c[101].checked)

if(point==110){      ///全部yes マップ
 location.href="final2.html";
}

if(point==113){     ///全部NO　　仏
 location.href="final4.html";
}

if(point==112){     ///１がyes 他二つがNO　　署名
 location.href="final3.html";
}

if(point==111){     ///１,2がyes ３がNO　　署名
 location.href="final3.html";
}

if(point==10){     ///２のみyes　　　署名
 location.href="final3.html";
}
